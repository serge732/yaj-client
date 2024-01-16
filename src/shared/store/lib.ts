import type { Slice } from '@reduxjs/toolkit'

type Selector<S extends Slice, R> = (state: ReturnType<S['getInitialState']>) => R

export function defineSelector<S extends Slice, R>(
    slice: S,
    selector: Selector<S, R>
) {
    return function (store: any) {
        if (slice.name in store) {
            return selector(store[slice.name])
        } else {
            return null as R
        }
    }
}
