import React, { useState } from "react";
import Modal from "../Modal";
import SelectDay from "../../selectDay/SelectDay";
import AlarmClock from "../../alarmClock/AlarmClock";
import "./style.css";
import {
  ContainerSelectDay,
  ContainerInput,
  NameInputContainer,
  Boton,
  Contenido,
  ContainerSchedule,
} from "./stylesComponents";
const ModalAgregarCurso = ({ openModal, setOpenModal }) => {
  const [form, setForm] = useState({
    nameCourse: "",
    openCourse: "00:00",
    finishCourse: "00:00",
    dayCourse: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    // validaciones antes de enviar
    console.log(form);
  };

  return (
    <Modal
      estado={openModal}
      cambiarEstado={setOpenModal}
      titulo="Establecer Horario"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"20px"}
      widthContenedor={"450px"}
    >
      <Contenido onSubmit={sendForm}>
        <ContainerInput>
          <NameInputContainer>Curso</NameInputContainer>
          <input
            type="text"
            name="nameCourse"
            value={form.nameCourse}
            onChange={handleChange}
            placeholder="Nombre del curso..."
          />
          <div className="select">
            <select
              name="nameCourse"
              disabled={false}
              onChange={handleChange}
              value={form.nameCourse}
              className="select_course"
            >
              <option value="Comunicación">Comunicación</option>
              <option value="Lenguaje">Lenguaje</option>
              <option value="Algebra">Algebra</option>
            </select>
          </div>
        </ContainerInput>
        <ContainerSchedule>
          <NameInputContainer>Horario</NameInputContainer>
          <AlarmClock
            name="openCourse"
            eventOnChan={handleChange}
            titleClock="Inicio"
          />
          <AlarmClock
            name="finishCourse"
            eventOnChan={handleChange}
            titleClock="Fin"
          />
        </ContainerSchedule>
        <ContainerSelectDay>
          <NameInputContainer>Día de la semana</NameInputContainer>
          <SelectDay
            name={"dayCourse"}
            handleChange={handleChange}
            valueDay={form.dayCourse}
          />
        </ContainerSelectDay>
        {/* <Boton onClick={() => setOpenModal(!openModal)} type="submit">
          Agregar
        </Boton> */}
        <Boton type="submit">Agregar Curso</Boton>
      </Contenido>
    </Modal>
  );
};

export default ModalAgregarCurso;
