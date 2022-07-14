import React,{useState} from "react";

function Toggle() {
  const [isOn, setIsOn]=useState(false);
  const handleEvent=()=>{
    //isOn ? "ON" : "OFF"
    setIsOn((isOn) => !isOn);
  }
  return (
    <div>
      <button onClick={handleEvent}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Toggle;