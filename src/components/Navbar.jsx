import React from "react";
import {Link, NavLink} from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar(){
    return(
        <div class="navbarContainer">
            <Link exact to="/">Home Page</Link>
            <Link exact to="/free_play">Free Play</Link>
            <Link exact to="/normal_play">Normal Game</Link>
            <Link exact to="/rules">Rules</Link>
        </div>
    )
}