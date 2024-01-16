import { defineSelector } from 'shared/store';
//
import { taskEditorDialogSlice } from './slice';

export const selectors = {
    dialogOpen: defineSelector(taskEditorDialogSlice, (s) => s.dialogOpen)
}
