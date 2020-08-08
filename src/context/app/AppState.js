import React, { useReducer } from 'react'
import axios from 'axios'
import AppContext, { AppReducers as Reducer } from './appContext'
import {
    ADD_MEMBER,
    LOGIN
} from '../types'

const AppState = props => {

    //Initial state values
    const initialState = {
        currentMember: null,
        currentUser: null,
        userType: null
    }

    //Creating a reducer 
    const [state, dispatch] = useReducer(Reducer, initialState)

    const userLogin = async (loginCred) => {
        console.log('log..', loginCred)
        if (loginCred.userID.length > 0 &
            loginCred.password.length > 0) {
            dispatch({
                type: LOGIN,
                payload: loginCred
            })
        } else {
            alert('UserName and Password cannot be blank')
        }
    }

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
                currentUser: state.currentUser,
                userType: state.userType,
                addMember,
                userLogin,

            }
        }>
            {props.children}
        </AppContext.Provider >
    )
}

export default AppState

