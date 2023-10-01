import React, { useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef(null)

  const stopTimer = ()=>{
    window.clearInterval(interValRef.current)
  }
  return <div>MutableRef</div>;
};

export default MutableRef;
