import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} shadow-sm`}
            style={{
                backgroundColor: props.mode === "light" ? "#e3f2fd" : "#212529",
            }}
        >
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">TextUtils</Link>

                <ul className="navbar-nav d-flex flex-row gap-3 me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link></li>
                    <li className="nav-item"> < Link className="nav-link" to="/about">About</Link>
                    </li>

                </ul>


                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
                    <label className="form-check-label " htmlFor="switchCheckDefault" htmlFor="switchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}