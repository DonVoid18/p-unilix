import React from "react";

const CellCourse = ({ value, f1, f2, ic1, ic2 }) => {
  return (
    <div className="container_cell">
      <p className="title_cell">{value.name}</p>
      <p>
        {value.openCourse} - {value.finishCourse}
      </p>
      <div className="buttons_cell">
        <button onClick={() => f1(value)}>{ic1}</button>
        <button onClick={() => f2(value)}>{ic2}</button>
      </div>
    </div>
  );
};

export default CellCourse;
