import { defineSelector } from 'shared/store';
import { signupDialogSlice } from './slice';

export const selectors = {
    isOpen: defineSelector(signupDialogSlice, (s) => s.isOpen)
}

