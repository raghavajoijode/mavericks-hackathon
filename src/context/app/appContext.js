import { createContext } from 'react'
import {
    LOGIN,
    ADD_MEMBER,
    UPDATE_CLAIM,
    GET_CLAIM
} from '../types'

export const AppReducers = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: action.payload,
                userType: action.payload.userType
            }
        case ADD_MEMBER:
            return {
                ...state,
                currentMember: action.payload
            }
        case GET_CLAIM:
            return {
                ...state,
                currentClaim: action.payload
            }
        case UPDATE_CLAIM:
            return {
                ...state,
                currentClaim: action.payload
            }
        default:
            return state
    }
}

export default createContext()