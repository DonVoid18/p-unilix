import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import SelectDay from "../../SelectDay/SelectDay";
import AlarmClock from "../../AlarmClock/AlarmClock";
import Preloader from "../../Preloader/Preloader";
import "./StyleModalEdit.css";
import {
  ContainerSelectDay,
  ContainerInput,
  NameInputContainer,
  Boton,
  Contenido,
  ContainerSchedule,
} from "./Styled-ModalEdit";
const regexValid = /^[^]+$/;

const ModalEdit = ({
  openModal,
  setOpenModal,
  modifiedCourse,
  objModified,
  setValueSelect,
}) => {
  const form = objModified || {
    nameCourse: "",
    openCourse: "",
    finishCourse: "",
    dayCourse: "",
  };
  const [validName, setValidName] = useState();
  const [validDay, setValidDay] = useState();
  const [validHor, setValidHor] = useState();
  const [botonAgregado, setBotonAgregado] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const handleChange = (e) => {
    setValueSelect({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (form.nameCourse !== "") {
      setValidName(true);
    }
    if (form.dayCourse !== "") {
      setValidDay(true);
    }
    if (form.openCourse !== "" && form.finishCourse !== "") {
      setValidHor(validHorario());
    }
  }, [form]);

  useEffect(() => {
    setTimeout(() => {
      setBotonAgregado(false);
    }, 3000);
  }, [botonAgregado]);
  const sendForm = (e) => {
    e.preventDefault();
    // validaciones antes de enviar
    const resultName = regexValid.test(form.nameCourse);
    const resultDay = regexValid.test(form.dayCourse);
    const resultHor = validHorario();
    setValidName(resultName);
    setValidDay(resultDay);
    setValidHor(resultHor);

    if (resultName && resultDay && resultHor) {
      setPreloader(true);
      // guardar el objeto

      setTimeout(() => {
        setPreloader(false);
        modifiedCourse();
        console.log(form);
        setBotonAgregado(true);
      }, 3000);
    }
  };
  const validHorario = () => {
    const oH = form.openCourse.split(":");
    const fH = form.finishCourse.split(":");
    // validacion
    const m1 = parseInt(oH[0]) * 60 + parseInt(oH[1]);
    const m2 = parseInt(fH[0]) * 60 + parseInt(fH[1]);
    console.log(m1 < m2);
    return m1 < m2;
  };
  const classInputValid = (value) => {
    if (value === undefined) return "";
    if (value === false) return "not-valid";
  };
  return (
    <Modal
      estado={openModal}
      cambiarEstado={setOpenModal}
      titulo="Modificar Curso"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"1.25rem"}
      colorText={"#3e23ef"}
    >
      <Contenido onSubmit={sendForm}>
        <ContainerInput className={classInputValid(validName)}>
          <NameInputContainer>
            Curso {validName === undefined && ""}
            {validName === false && <span>&#128680;</span>}
          </NameInputContainer>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </ContainerInput>
        <ContainerSchedule className={classInputValid(validHor)}>
          <NameInputContainer>
            Horario {validHor === undefined && ""}
            {validHor === false && <span>&#128680;</span>}
          </NameInputContainer>
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
        <ContainerSelectDay className={classInputValid(validDay)}>
          <NameInputContainer>
            Día de la semana {validDay === undefined && ""}
            {validDay === false && <span>&#128680;</span>}
          </NameInputContainer>
          <SelectDay
            name={"day"}
            handleChange={handleChange}
            valueDay={form.day}
          />
        </ContainerSelectDay>
        <Boton type="submit">Modificar</Boton>
      </Contenido>
      {botonAgregado ? (
        <div className="correct-validation-edit">
          Modificado
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-check-circle-fill-edit"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </div>
      ) : undefined}
      {preloader ? <Preloader /> : undefined}
    </Modal>
  );
};

export default ModalEdit;
