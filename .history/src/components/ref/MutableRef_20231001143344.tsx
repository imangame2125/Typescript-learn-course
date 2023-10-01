import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef(null)

  const stopTimer = ()=>{
    window.clearInterval(interValRef.current)
  }

  useEffect(()=>{
    interValRef.current = window.setInterval(()=>{
        setTimer((timer)=>timer + 1)
    },1000)
  },[])
  return <div>MutableRef</div>;
};

export default MutableRef;
