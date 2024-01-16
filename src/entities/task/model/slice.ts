import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
//
import type { Nullable } from 'shared/types';
//
import type { Task } from './types';
import { store } from 'shared/store';

export interface TaskSliceState {
    loading: 'idle' | 'pending' | 'success' | 'error'
    error?: Nullable<string>
    tasks: Record<number, Task>
}

const initialState: TaskSliceState = {
    loading: 'idle',
    error: null,
    tasks: {}
}

export const taskSlice = createSlice({
    name: 'entities/task',
    initialState,
    reducers: {
        createTask(state, action: PayloadAction<string>) {
            const sort = Object.keys(state.tasks).length
            const id = sort + 1

            state.tasks[id] = {
                id,
                name: action.payload,
                status: 'todo',
                sort
            }
        },
        updateTask(state, action: PayloadAction<Partial<Omit<Task, 'id'>> & Pick<Task, 'id'>>) {
            const { id, name, sort, status } = action.payload

            state.tasks[id] = {
                id: id,
                name: typeof name === 'string'
                    ? name : state.tasks[id].name,
                sort: typeof sort === 'number'
                    ? sort : state.tasks[id].sort,
                status: typeof status === 'string'
                    ? status : state.tasks[id].status
            }
        },
        replaceTasks(state, action: PayloadAction<TaskSliceState['tasks']>) {
            state.tasks = action.payload
        }
    }
})

export const { actions } = taskSlice

store.injectSlice(taskSlice)
