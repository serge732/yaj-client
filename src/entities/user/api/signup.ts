import type { AxiosResponse } from 'axios'
//
import { instance } from 'shared/api'

export interface SignupPayload {
    email: string
    password: string
    firstname: string
    lastname: string
}

export function signup(payload: SignupPayload) {
    return instance.post<void, AxiosResponse, SignupPayload>('signup', payload)
}
