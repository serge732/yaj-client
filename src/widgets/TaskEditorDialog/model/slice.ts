import { createSlice } from '@reduxjs/toolkit';
//
import { store } from 'shared/store';

export interface TaskEditorDialogState {
    dialogOpen: boolean
}

const initialState: TaskEditorDialogState = {
    dialogOpen: false
}

export const taskEditorDialogSlice = createSlice({
    name: 'widgets/task-editor-dialog',
    initialState,
    reducers: {
        open(state) {
            state.dialogOpen = true
        },
        close(state) {
            state.dialogOpen = false
        }
    }
})

export const { actions } = taskEditorDialogSlice

store.injectSlice(taskEditorDialogSlice)
