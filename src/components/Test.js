import React from "react"
import { Link } from 'react-router-dom'

const Test = () => {
    const clainRefId = 'f7ad2579-6080-4788-bbee-fdfabdcb53a2';
    return (
        <Link to={`/claim/${clainRefId}`} className="nav-link"> {clainRefId} </Link>
    )
}
export default Test