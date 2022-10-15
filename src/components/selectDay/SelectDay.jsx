import React from "react";
import "./SelectDay.css";
const SelectDay = ({ name, handleChange, valueDay }) => {
  return (
    <>
      <input
        type="radio"
        id="lunes"
        name={name}
        value="1"
        onChange={handleChange}
        checked={valueDay === "1" || false}
      />
      <label htmlFor="lunes" className="day_week">
        L
      </label>

      <input
        type="radio"
        id="martes"
        name={name}
        value="2"
        onChange={handleChange}
        checked={valueDay === "2" || false}
      />
      <label htmlFor="martes" className="day_week">
        M
      </label>

      <input
        type="radio"
        id="miercoles"
        name={name}
        value="3"
        onChange={handleChange}
        checked={valueDay === "3" || false}
      />
      <label htmlFor="miercoles" className="day_week">
        M
      </label>

      <input
        type="radio"
        id="jueves"
        name={name}
        value="4"
        onChange={handleChange}
        checked={valueDay === "4" || false}
      />
      <label htmlFor="jueves" className="day_week">
        J
      </label>

      <input
        type="radio"
        id="viernes"
        name={name}
        value="5"
        onChange={handleChange}
        checked={valueDay === "5" || false}
      />
      <label htmlFor="viernes" className="day_week">
        V
      </label>

      <input
        type="radio"
        id="sabado"
        name={name}
        value="6"
        onChange={handleChange}
        checked={valueDay === "6" || false}
      />
      <label htmlFor="sabado" className="day_week">
        S
      </label>

      <input
        type="radio"
        id="domingo"
        name={name}
        value="7"
        onChange={handleChange}
        checked={valueDay === "7" || false}
      />
      <label htmlFor="domingo" className="day_week">
        D
      </label>
    </>
  );
};

export default SelectDay;
