import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function Toggle() {
    const [bgcolor, setColor] = useState({
        color: "red",
        border: "1px solid black"
    });
    const [label , setLabel] = useState("Change");
    const handleToggle  = ()=> {
        if(bgcolor.color === 'red') {
            setColor({
                color: "black",
                border: "1px solid yellow"
            })
        } else {
            setColor({
                color: "red",
                border: "1px solid black"
            })
        }
    }
    return (
        <>
        <div className="box" style={bgcolor}>Hello , how are yoo</div>
        <button onClick={handleToggle}>click</button>
        </>
    )
}
