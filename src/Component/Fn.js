import React , { Component, useState } from 'react';

function Fn() {
    let [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <>
    <div>{count}</div>
    <button onClick={()=>handleClick()}>click</button>
    </>
  )
}

export default Fn