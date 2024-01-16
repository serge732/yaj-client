import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Field, Form, Formik } from 'formik'
import type { FieldProps, FormikConfig, FormikProps } from 'formik'
import { useSelector } from 'react-redux'
//
import { userModel } from 'entities/user'
import type { SignupPayload } from 'entities/user'
import { useAppDispatch } from 'shared/store'
import { useEffect } from 'react'

export interface SignupFormProps {
    onCancel(): void
    onOk(): void
}

export function SignupForm(props: SignupFormProps) {
    const { onCancel, onOk } = props

    const dispatch = useAppDispatch()

    const userLoading = useSelector(userModel.selectors.loading)
    const userError = useSelector(userModel.selectors.error)

    const initialValues: SignupPayload = {
        email: '',
        firstname: '',
        lastname: '',
        password: ''
    }

    const onSubmit: FormikConfig<typeof initialValues>['onSubmit'] = async (values) => {
        await dispatch(userModel.thunks.signup(values))
    }

    useEffect(
        () => {
            if (userLoading === 'success') {
                onOk()
            }
        },
        []
    )

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }: FormikProps<typeof initialValues>) => (
                <Form>
                    <Stack spacing="16px">
                        <Field name="email">
                            {({ field }: FieldProps) => (
                                <TextField
                                    {...field}
                                    label="E-mail" />
                            )}
                        </Field>
                        <Field name="firstname">
                            {({ field }: FieldProps) => (
                                <TextField
                                    {...field}
                                    label="Имя" />
                            )}
                        </Field>
                        <Field name="lastname">
                            {({ field }: FieldProps) => (
                                <TextField
                                    {...field}
                                    label="Фамилия" />
                            )}
                        </Field>
                        <Field name="password">
                            {({ field }: FieldProps) => (
                                <TextField
                                    {...field}
                                    type="password"
                                    label="Пароль" />
                            )}
                        </Field>
                        <Stack direction="row" spacing="4px">
                            <Button
                                disabled={isSubmitting}
                                onClick={onCancel}>
                                Отменить
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}>
                                Зарегистрировать
                            </Button>
                        </Stack>
                        {!!userError && (
                            <Typography variant="caption" color="error">
                                {userError}
                            </Typography>
                        )}
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}
