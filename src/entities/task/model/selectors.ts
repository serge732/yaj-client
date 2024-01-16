import { defineSelector } from 'shared/store';
//
import { taskSlice } from './slice';

export const selectors = {
    loading: defineSelector(taskSlice, (s) => s.loading),
    error: defineSelector(taskSlice, (s) => s.error),
    tasks: defineSelector(taskSlice, (s) => s.tasks)
}
