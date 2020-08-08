import React from "react"
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/login'} className="nav-link"> Login </Link></li>
                <li><Link to={'/memberEnrollment'} className="nav-link">Member Enrollment</Link></li>
                {/* <li><Link to={'/claimSubmission'} className="nav-link">Claim Submission</Link></li>
                <li><Link to={'/claimAdjudication'} className="nav-link">Claim Adjudication</Link></li> */}
            </ul>
        </nav>
        <hr />
    </div>
)

export default Header