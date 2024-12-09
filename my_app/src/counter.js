import React, { useEffect, useState } from 'react'
import "../App.css"
const Counter = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    function handleIncrement(){
        setCount(count++)
    }
    function handleDecrement(){
        setCount(count--)
    }
    useEffect(()=>{
        setCount1(count*S)
    },[count])
    return (
        <div>
            Counter: {count}
            <br />
            <button id="inc" onClick={handleIncrement}>Increment</button>
            <button id="dec" onClick={handleDecrement}>Decrement</button>
        </div>
    );
    
}