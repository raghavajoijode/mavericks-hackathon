import React from "react"
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/memberenrollment'} className="nav-link">Member Enrollment</Link></li>
                <li><Link to={'/claimsubmission'} className="nav-link">Claim Submission</Link></li>
            </ul>
        </nav>
        <hr />
    </div>
)

export default Header