import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
//
import { useAppDispatch } from 'shared/store'
import { taskEditorDialogModel } from 'widgets/TaskEditorDialog'
import { TasksBoard } from 'widgets/TasksBoard'
import { signupDialogModel } from 'widgets/SignupDialog';

export function BoardPage() {
    const dispatch = useAppDispatch()

    const handleCreateTask = () => {
        dispatch(taskEditorDialogModel.actions.open())
    }

    const handleCreateUser = () => {
        dispatch(signupDialogModel.actions.open())
    }

    return (
        <Stack
            spacing="24px"
            sx={{
                boxSizing: 'border-box',
                height: '100%',
                padding: '24px',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <Stack
                    direction="row"
                    spacing="16px"
                    divider={<Divider orientation="vertical" />}>
                    <Button onClick={handleCreateTask}>
                        Создать задачу
                    </Button>
                    <Button onClick={handleCreateUser}>
                        Создать пользователя
                    </Button>
                </Stack>
                <IconButton color="primary">
                    <LogoutOutlinedIcon />
                </IconButton>
            </Box>
            <TasksBoard />
        </Stack>
    )
}
