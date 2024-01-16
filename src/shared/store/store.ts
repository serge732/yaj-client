import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { Slice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const store = (() => {
    const _store = configureStore({
        reducer: (s = {}) => s
    })

    const reducers: Record<string, Slice['reducer']> = {}

    const injectSlice = (slice: Slice) => {
        reducers[slice.name] = slice.reducer
        _store.replaceReducer(combineReducers(reducers))
    }

    return Object.assign(_store, {
        injectSlice
    })
})()

export function useAppDispatch() {
    return useDispatch<typeof store.dispatch>()
}
