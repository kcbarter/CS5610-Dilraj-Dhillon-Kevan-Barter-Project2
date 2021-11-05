import React from "react";
import "../css/Button.css";
import {Link, NavLink} from "react-router-dom";


export default function HomePage(){
    return(
        <div class="homePageContiner">
            <Link exact to="/free_play"> 
                <button class="linkButton">Free Play</button>
            </Link>
            <Link exact to="/normal_play"> 
                <button class="linkButton">Normal Game</button>
            </Link> 
        </div>
    )
}