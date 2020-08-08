import React, { useContext, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import AppContext from './../context/app/appContext'

const Home = prop => {

    const appContext = useContext(AppContext);
    const { userType } = appContext
    useEffect(() => {

    }, [appContext, userType, prop.history])

    if (userType === 'Provider') {
        return (<Redirect to="/claimSubmission" />)
    }
    else if (userType === 'Carrier') {
        return (<Redirect to="/claimAdjudication" />)
    } else {
        return (<Redirect to="/login" />)
    }
}

export default Home