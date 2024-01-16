import { defineSelector } from 'shared/store';
//
import { userSlice } from './slice';

export const selectors = {
    loading: defineSelector(userSlice, (s) => s.loading),
    error: defineSelector(userSlice, (s) => s.error)
}
