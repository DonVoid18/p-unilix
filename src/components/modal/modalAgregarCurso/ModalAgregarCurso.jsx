import React, { useState, useEffect } from "react";
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
const regexValid = /^[^]+$/;
const ModalAgregarCurso = ({ openModal, setOpenModal }) => {
  const [form, setForm] = useState({
    nameCourse: "",
    openCourse: "",
    finishCourse: "",
    dayCourse: "",
  });
  const [validName, setValidName] = useState();
  const [validDay, setValidDay] = useState();
  const [validHor, setValidHor] = useState();

  const handleChange = (e) => {
    setForm({
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

  const sendForm = (e) => {
    e.preventDefault();

    const resultName = regexValid.test(form.nameCourse);
    const resultDay = regexValid.test(form.dayCourse);
    const resultHor = validHorario();
    setValidName(resultName);
    setValidDay(resultDay);
    setValidHor(resultHor);

    if (resultName && resultDay && resultHor) {
      console.log("bien validado");
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
      titulo="Establecer Horario"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"20px"}
      widthContenedor={"470px"}
    >
      <Contenido onSubmit={sendForm}>
        <ContainerInput className={classInputValid(validName)}>
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
        <ContainerSchedule className={classInputValid(validHor)}>
          <NameInputContainer>
            Horario {validHor === undefined && ""}
            {validHor === false && <span>&#128315;</span>}
          </NameInputContainer>
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
        <ContainerSelectDay className={classInputValid(validDay)}>
          <NameInputContainer>Día de la semana</NameInputContainer>
          <SelectDay
            name="dayCourse"
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
