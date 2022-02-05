import React from "react";

export default function SpeedInput({speed, units, handleChange }) {
  return (
    <fieldset>
    <legend>Введите скорость в {units} </legend>
      <input value={speed} onChange={(e)=>handleChange(e, units)} />
    </fieldset>
  );
}
