import { createSlice } from '@reduxjs/toolkit'
//
import { store } from 'shared/store'

export interface SignupDialogState {
    isOpen: boolean
}

const initialState: SignupDialogState = {
    isOpen: false
}

export const signupDialogSlice = createSlice({
    name: 'features/user-editor-dialog',
    initialState,
    reducers: {
        open(state) {
            state.isOpen = true
        },
        close(state) {
            state.isOpen = false
        }
    }
})

export const { actions } = signupDialogSlice

store.injectSlice(signupDialogSlice)
