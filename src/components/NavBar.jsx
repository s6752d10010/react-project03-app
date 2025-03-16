import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function NavBar () {
    return (
       <>
       <div style={{textAlign:"center"}}>
        <h4>
            <Link to="/">Login</Link>
            <Link to="/registerpage">Register</Link>
            <Link to="/homepage">Homepage</Link>
            <Link to="/aboutpage">Aboutpage</Link>
            <Link to="/contact">Contact</Link>
        </h4>
        <Header/>
       </div>
       </>
    )
}

export default NavBar