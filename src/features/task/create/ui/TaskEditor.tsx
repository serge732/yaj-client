import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { taskModel } from 'entities/task';
import { useFormik } from 'formik';
//
import { useAppDispatch } from 'shared/store';

export interface TaskEditorProps {
    onCancel(): void
    onOk(): void
}

export function TaskEditor(props: TaskEditorProps) {
    const { onCancel, onOk } = props

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit(values) {
            const { name } = values
            dispatch(taskModel.actions.createTask(name))
            onOk()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing="16px">
                <TextField
                    label="Название задачи"
                    {...formik.getFieldProps('name')} />
                <Stack direction="row" spacing="4px" justifyContent="flex-end">
                    <Button onClick={onCancel}>
                        Отменить
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!formik.values.name}>
                        Сохранить
                    </Button>
                </Stack>
            </Stack>
        </form>
    )
}
