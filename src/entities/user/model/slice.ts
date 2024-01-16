import { createSlice } from '@reduxjs/toolkit'
import { store } from 'shared/store'
//
import type { Nullable } from 'shared/types'
//
import { thunks } from './thunks'

export interface UserSliceState {
    loading: 'idle' | 'pending' | 'success' | 'error'
    error?: Nullable<string>
}

const initialState: UserSliceState = {
    loading: 'idle',
    error: null
}

export const userSlice = createSlice({
    name: 'entities/user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(thunks.signup.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(thunks.signup.fulfilled, (state) => {
            state.loading = 'success'
        })
        builder.addCase(thunks.signup.rejected, (state, action) => {
            state.loading = 'error'
            state.error = action.error.message
        })
    },
})

export const { actions } = userSlice

store.injectSlice(userSlice)
