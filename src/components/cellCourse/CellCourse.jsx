import React from "react";
import styled, { useTheme } from "styled-components";
const CellCourse = ({ value, f1, f2, ic1, ic2 }) => {
  const theme = useTheme();
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
    <ContainerCell
      className="container_cell"
      color={theme.cellColor}
      colorText={theme.textColor}
    >
      <p className="title_cell">{value.name}</p>
      <HorCell colorText={theme.icon}>
        {transformHor(value.openCourse)} - {transformHor(value.finishCourse)}
      </HorCell>
      <div className="buttons_cell">
        <button onClick={() => f1(value)}>{ic1}</button>
        <button onClick={() => f2(value)}>{ic2}</button>
      </div>
    </ContainerCell>
  );
};

export default CellCourse;

const ContainerCell = styled.div`
  background-color: ${(props) => props.color};
  color: ${(props) => props.colorText};
`;
const HorCell = styled.p`
  font-size: 0.9688rem;
  color: ${(props) => props.colorText};
`;
