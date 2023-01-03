import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png"

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <Link className="links" to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className="links" to="/?cat=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className="links" to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className="links" to="/?cat=cinema">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className="links" to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="links" to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    <span>Username</span>
                    <span>Logout</span>
                    <span className="Write">
                        <Link className="links" to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar