import React from "react";
import Modal from "../Modal";
import styled from "styled-components";
import "./StyleModalCruces.css";
const ModalCruces = ({ openModal, setOpenModal, data }) => {
  const coursesCrosses = (number) => {
    let newCoursesCrosses = [];
    const dataTemp = data
      .filter((course) => course.day === number)
      .sort((a, b) => {
        // ordenamiento
        const fH = a.finishCourse.split(":");
        const oH = b.openCourse.split(":");
        // curso anterior
        const m1 = parseInt(fH[0]) * 60 + parseInt(fH[1]);
        // curso posterior
        const m2 = parseInt(oH[0]) * 60 + parseInt(oH[1]);

        return m1 - m2;
      });
    for (let i = 0; i < dataTemp.length - 1; i++) {
      const fH = dataTemp[i].finishCourse.split(":");
      const oH = dataTemp[i + 1].openCourse.split(":");
      const m1 = parseInt(fH[0]) * 60 + parseInt(fH[1]);
      const m2 = parseInt(oH[0]) * 60 + parseInt(oH[1]);

      if (m1 > m2) {
        newCoursesCrosses.push(
          <span className="value_course_crosses" key={i}>
            <span className="course_grup_crosses">
              <span className="name_grup_crosses">Cursos</span>
              <span className="course_one_crosses">{dataTemp[i].name}</span>
              <span className="course_two_crosses">{dataTemp[i + 1].name}</span>
            </span>
            <span className="time_crosses_value">
              <span className="name_time_crosses">Tiempo</span>
              <span className="course_time_value">
                {parseInt((m1 - m2) / 60) !== 0
                  ? `${parseInt((m1 - m2) / 60)}h`
                  : ""}{" "}
                {parseInt((m1 - m2) % 60) !== 0
                  ? `${parseInt((m1 - m2) % 60)}m`
                  : ""}
              </span>
            </span>
          </span>
        );
      }
    }
    if (newCoursesCrosses.length !== 0) {
      return (
        <div className="container_crosses">
          <div className="title_container_crosses">lunes</div>
          {newCoursesCrosses}
        </div>
      );
    } else {
      return "";
    }
  };
  const contentEmpty = () => {
    let suma = 0;
    for (let i = 1; i < 8; i++) {
      suma += coursesCrosses(`${i}`).length;
    }
    return suma;
  };
  contentEmpty();
  return (
    <Modal
      estado={openModal}
      cambiarEstado={setOpenModal}
      titulo="Cruces de horarios"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"20px"}
      widthContenedor={"700px"}
    >
      <Contenido>
        {contentEmpty() !== 0 ? (
          <>
            {coursesCrosses("1")}
            {coursesCrosses("2")}
            {coursesCrosses("3")}
            {coursesCrosses("4")}
            {coursesCrosses("5")}
            {coursesCrosses("6")}
            {coursesCrosses("7")}
          </>
        ) : (
          "No hay cruces de horario"
        )}
      </Contenido>
    </Modal>
  );
};

export default ModalCruces;

const Contenido = styled.div`
  display: grid;
  gap: 30px;
  max-height: 500px;
  overflow-y: auto;
`;
