import React from "react";
import { Link } from "react-router-dom";
import Budget from "./budget";

const Landing = ()=>{


    const handleClick = (e) => {
        console.log(e)
        // <Budget/>
        return (<Budget/>) 
    }

    return(
        <div>
            <button><Link to="/login" className="link_login">Login</Link></button>
            <button><Link to="/register" className="link_login">Sign up</Link></button>

            <button onClick={(e)=> handleClick(e)}>Budget</button>
        </div>
    )
}

export default Landing