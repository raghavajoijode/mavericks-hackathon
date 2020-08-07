import { createContext } from 'react'
import {
    LOGIN,
    ADD_MEMBER
} from '../types'

export const AppReducers = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                ...state
            }
        case ADD_MEMBER:
            return {
                ...state,
                currentMember: action.payload
            }
        default:
            return state
    }
}

export default createContext()