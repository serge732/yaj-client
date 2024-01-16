import Dialog from '@mui/material/Dialog';
import { useSelector } from 'react-redux';
//
import { SignupForm } from 'features/user/signup';
import { useAppDispatch } from 'shared/store';
//
import { signupDialogModel } from '../model';

export function SignupDialog() {
    const dispatch = useAppDispatch()
    const isOpen = useSelector(signupDialogModel.selectors.isOpen)
    const handleCancel = () => {
        dispatch(signupDialogModel.actions.close())
    }
    const handleOk = () => {
        dispatch(signupDialogModel.actions.close())
    }
    return (
        <Dialog
            open={isOpen}
            PaperProps={{
                sx: {
                    padding: '24px'
                }
            }}>
            <SignupForm
                onCancel={handleCancel}
                onOk={handleOk} />
        </Dialog>
    )
}
