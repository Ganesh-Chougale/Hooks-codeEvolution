import React, { useEffect, useState } from 'react'

function RH_useEffect_03() {

    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    function cursorPosition(e){
        console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("useEffect Run");
        window.addEventListener('mousemove', cursorPosition)
    }, []) // empty dependancy mean run only once

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default RH_useEffect_03
