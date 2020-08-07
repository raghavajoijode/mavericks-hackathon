import React, { useReducer } from 'react'
import axios from 'axios'
import AppContext, { AppReducers as Reducer } from './appContext'
import {
    ADD_MEMBER
} from '../types'
//axios.defaults.baseURL = 'http://localhost:7000';

const AppState = props => {

    //Initial state values
    const initialState = {
        currentMember: null
    }

    //Creating a reducer 
    const [state, dispatch] = useReducer(Reducer, initialState)

    const addMember = async (member) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log('Calling api to add')
        const response = await axios.post('http://10.94.86.4:8081/api/member/enroll', {
            'name': member.name,
            'location': member.location,
            'ssn': member.ssn,
            'benefitPlans': member.benefitPlans,
            'type': member.type
        }, config);
        console.log("Respnse  ", response)
        dispatch({
            type: ADD_MEMBER,
            payload: response.data
        })
    }

    return (
        <AppContext.Provider value={
            {
                currentMember: state.currentMember,
                addMember
            }
        }>
            {props.children}
        </AppContext.Provider >
    )
}

export default AppState

