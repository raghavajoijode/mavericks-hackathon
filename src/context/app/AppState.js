import React, { useReducer } from 'react'
import axios from 'axios'
import AppContext, { AppReducers as Reducer } from './appContext'
import {
    ADD_MEMBER,
    GET_CLAIM,
    UPDATE_CLAIM,
    LOGIN
} from '../types'

const AppState = props => {

    //Initial state values
    const initialState = {
        currentMember: null,
        currentUser: null,
        userType: null,
        currentClaim: {
            claimRefID: '',
            memberID: '',
            carrierID: '',
            providerID: '',
            status: '',
            amount: '',
            ssn: '',
            benefitPlans: [],
            type: ''
        }
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

    const getClaim = async (claimRefID) => {
        const response = {
            "data": {
                "claimRefID": "f7ad2579-6080-4788-bbee-fdfabdcb53a2",
                "memberID": "12312",
                "carrierID": "32121",
                "providerID": "ABCDE",
                "status": null,
                "amount": "2312",
                "claimLines": [{
                    "id": 5,
                    "code": "B101",
                    "claimRefID": "f7ad2579-6080-4788-bbee-fdfabdcb53a2",
                    "unit": 1,
                    "amount": 2312,
                    "date": "2020-07-12T00:00:00.000+00:00",
                    "dupInd": true,
                    "dupLineID": null,
                    "lineRefID": "f96bf7b5-a394-3c19-aa17-fe9196684a32",
                    "status": null
                }]
            }
        }
        console.log('Calling api to get')
        //const response = await axios.get(`http://10.94.86.4:8081/api/member/${claimRefID}`);
        console.log("Respnse  ", response)
        dispatch({
            type: GET_CLAIM,
            payload: response.data
        })
    }

    const updateClaim = async (claim) => {
        dispatch({
            type: UPDATE_CLAIM,
            payload: claim
        })
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
                currentClaim: state.currentClaim,
                userType: state.userType,
                addMember,
                userLogin,
                getClaim,
                updateClaim

            }
        }>
            {props.children}
        </AppContext.Provider >
    )
}

export default AppState

