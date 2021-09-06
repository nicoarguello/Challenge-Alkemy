import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = (props) => {

console.log(props, props.location.search)

    return (
        <div>
            <p>Home</p>
        </div>
    )
}

export default Home;

