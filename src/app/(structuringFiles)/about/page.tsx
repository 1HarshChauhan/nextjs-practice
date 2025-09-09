"use client";

import {useState} from "react";

export default function About(){
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount((prev)=>prev+1);
    }
    const decrement=()=>{
        setCount((prev)=>prev-1);
    }
    return(
        <>
        <h1> the counter is {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </>
    )
}