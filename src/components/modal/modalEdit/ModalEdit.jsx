import React, { useState } from "react";
import Modal from "../Modal";
import SelectDay from "../../selectDay/SelectDay";
import AlarmClock from "../../alarmClock/AlarmClock";
import {
  ContainerSelectDay,
  ContainerInput,
  NameInputContainer,
  Boton,
  Contenido,
  ContainerSchedule,
} from "./stylesComponents";
const ModalEdit = ({
  openModal,
  setOpenModal,
  modifiedCourse,
  objModified,
  setValueSelect,
}) => {
  const form = objModified;
  const handleChange = (e) => {
    setValueSelect({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    // validaciones antes de enviar
    modifiedCourse();
    console.log(form);
  };
  return (
    <Modal
      estado={openModal}
      cambiarEstado={setOpenModal}
      titulo="Modificar Curso"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"20px"}
    >
      <Contenido onSubmit={sendForm}>
        <ContainerInput>
          <NameInputContainer>Curso</NameInputContainer>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </ContainerInput>
        <ContainerSchedule>
          <NameInputContainer>Horario</NameInputContainer>
          <AlarmClock
            name="openCourse"
            eventOnChan={handleChange}
            titleClock="Inicio"
            valueHor={form.openCourse}
          />
          <AlarmClock
            name="finishCourse"
            eventOnChan={handleChange}
            titleClock="Fin"
            valueHor={form.finishCourse}
          />
        </ContainerSchedule>
        <ContainerSelectDay>
          <NameInputContainer>Día de la semana</NameInputContainer>
          <SelectDay
            name={"day"}
            handleChange={handleChange}
            valueDay={form.day}
          />
        </ContainerSelectDay>
        {/* <Boton
          onClick={() => {
            setOpenModal(!openModal);
            modifiedCourse();
          }}
        >
          Modificar
        </Boton> */}
        <Boton type="submit">Modificar</Boton>
      </Contenido>
    </Modal>
  );
};

export default ModalEdit;
