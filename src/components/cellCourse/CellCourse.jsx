import React from "react";

const CellCourse = ({ value, f1, f2, ic1, ic2 }) => {
  const transformHor = (value) => {
    const hor = value.split(":");
    const suma = parseInt(hor[0]) * 60 + parseInt(hor[1]);
    if (suma >= 720) {
      let res = `${parseInt(hor[0]) - 12}`;

      if (suma >= 720 && suma <= 779) {
        res = `${parseInt(hor[0])}`;
      }
      // tarde
      return res.length === 1 ? `0${res}:${hor[1]} pm` : `${res}:${hor[1]} pm`;
    } else {
      // mañana
      return `${value} am`;
    }
  };
  return (
    <div className="container_cell">
      <p className="title_cell">{value.name}</p>
      <p>
        {transformHor(value.openCourse)} - {transformHor(value.finishCourse)}
      </p>
      <div className="buttons_cell">
        <button onClick={() => f1(value)}>{ic1}</button>
        <button onClick={() => f2(value)}>{ic2}</button>
      </div>
    </div>
  );
};

export default CellCourse;
