import { createAsyncThunk } from '@reduxjs/toolkit'
//
import { signup } from '../api'
import type { SignupPayload } from '../api'
import { AxiosError } from 'axios'

const signupThunk = createAsyncThunk<void, SignupPayload>(
    'entities/user/signup',
    async function (payload, thunksApi) {
        try {
            await signup(payload)
            thunksApi.fulfillWithValue({})
        } catch (error) {
            if (error instanceof AxiosError) {
                switch (error.response?.status) {
                    case 409:
                        throw new Error('Данный e-mail уже занят')
                    default:
                        throw new Error('Непредвиденная ошибка')
                }
            }
        }
    }
)

export const thunks = {
    signup: signupThunk
}
