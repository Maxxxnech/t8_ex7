import React from "react";
import "./css/Display.css"
export default function Display({speed, units, limit}) {
  const currentLimit =  Math.round(limit[units]);
  const overLimit  = speed > currentLimit;
  return (
    <div className={overLimit ? "display red" : "display"}>
       Скорость: {speed} {units}, {`${overLimit? "превышен": ""} предел: ${currentLimit} ${units}`} 
    </div>
  );
}
