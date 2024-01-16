import { selectors } from './selectors'
import { actions } from './slice'

export const taskEditorDialogModel = {
    actions,
    selectors
}

export type { TaskEditorDialogState } from './slice'
