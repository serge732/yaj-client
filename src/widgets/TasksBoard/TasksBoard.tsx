import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DragDropContext } from 'react-beautiful-dnd';
import type { OnDragEndResponder } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
//
import { TaskCard, taskModel } from 'entities/task'
import type { Task } from 'entities/task'
import { useAppDispatch } from 'shared/store';
import { DroppableStack } from 'shared/ui';

export function TasksBoard() {
    const dispatch = useAppDispatch()
    const tasks = useSelector(taskModel.selectors.tasks)

    const tasksByStatus = (status: Task['status']) => (
        Object.values(tasks)
            .filter((t) => t.status === status)
            .sort((a, b) => a.sort - b.sort)
            .map((t) => ({ ...t, draggableId: String(t.id) }))
    )

    const stackLabelByStatus = (status: Task['status']) => (({
        complete: 'Готово',
        progress: 'В работе',
        review: 'Ревью',
        todo: 'Сделать'
    } as Record<Task['status'], string>)[status])

    const handleDragEnd: OnDragEndResponder = (result) => {
        const { draggableId, destination, source } = result
        const taskId = Number(draggableId)

        if (!destination) return
        if (!taskId) return

        const allTasks = { ...tasks }

        const updateAllTasks = (tasksToUpdate: Task[]) => {
            tasksToUpdate.forEach((t, i) => {
                allTasks[t.id] = { ...t, sort: i }
            })
        }

        const destinationStatus = destination.droppableId as Task['status']
        const destinationTasks = tasksByStatus(destinationStatus)

        if (source.droppableId === destination.droppableId) {
            const [removed] = destinationTasks.splice(source.index, 1)
            destinationTasks.splice(destination.index, 0, removed)
            updateAllTasks(destinationTasks)
        } else {
            const sourceTasks = tasksByStatus(source.droppableId as Task['status'])
            const [removed] = sourceTasks.splice(source.index, 1)
            removed.status = destinationStatus
            destinationTasks.splice(destination.index, 0, removed)
            updateAllTasks(destinationTasks)
            updateAllTasks(sourceTasks)
        }

        console.log({ allTasks })
        dispatch(taskModel.actions.replaceTasks(allTasks))
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Stack direction="row" spacing="16px" width="100%" height="100%">
                {(['todo', 'progress', 'review', 'complete'] as Task['status'][])
                    .map((taskStatus) => (
                        <Paper
                            key={taskStatus}
                            variant="outlined"
                            sx={{ width: '100%', height: '100%', padding: '8px' }}>
                            <Stack height="100%">
                                <DroppableStack
                                    droppableId={taskStatus}
                                    items={tasksByStatus(taskStatus)}
                                    renderItem={(item) => (
                                        <TaskCard task={item} />
                                    )}
                                    stackProps={{
                                        spacing: '8px',
                                        height: '100%',
                                        sx: ({ palette }) => ({
                                            background: palette.grey[100]
                                        })
                                    }}
                                    slots={{
                                        before: (
                                            <>
                                                <Typography>
                                                    {stackLabelByStatus(taskStatus)}
                                                </Typography>
                                                <Divider />
                                            </>
                                        )
                                    }} />
                            </Stack>
                        </Paper>
                    ))}
            </Stack>
        </DragDropContext>
    );
}
