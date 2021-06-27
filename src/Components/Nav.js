import React from 'react'
import {Link} from "react-router-dom"
function Nav() {
    return (
        <>
            <div>
                <nav style={{ marginBottom: 1 + "rem" }} class="navbar navbar-expand navbar-dark bg-dark">
                    <div class="container-fluid">
                        <span class="navbar-brand">Navbar</span>

                        <div class="navbar-nav">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                            <span class="nav-link">Home</span>
                            </Link>

                            <Link to="/about" style={{ textDecoration: 'none' }}>
                            <span class="nav-link" >About</span>
                            </Link>

                            <Link to="/movies" style={{ textDecoration: 'none' }}>
                            <span class="nav-link">Movies</span>
                            </Link>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav
