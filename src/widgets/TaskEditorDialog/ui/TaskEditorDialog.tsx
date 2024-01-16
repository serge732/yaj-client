import Dialog from '@mui/material/Dialog';
import { useSelector } from 'react-redux';
//
import { TaskEditor } from 'features/task/create';
import { useAppDispatch } from 'shared/store';
//
import { taskEditorDialogModel } from '../model';

export function TaskEditorDialog() {
    const dispatch = useAppDispatch()

    const dialogOpen = useSelector(taskEditorDialogModel.selectors.dialogOpen)

    const handleCancel = () => {
        dispatch(taskEditorDialogModel.actions.close())
    }

    const handleOk = () => {
        dispatch(taskEditorDialogModel.actions.close())
    }

    return (
        <Dialog
            open={dialogOpen}
            PaperProps={{
                sx: {
                    padding: '24px'
                }
            }}>
            <TaskEditor
                onCancel={handleCancel}
                onOk={handleOk} />
        </Dialog>
    )
}
