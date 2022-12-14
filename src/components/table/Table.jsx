import "./Table.css";
import IconDelete from "../icon_button/IconDelete";
import IconEdit from "../icon_button/IconEdit";
import ModalDelete from "../modal/modalDelete/ModalDelete";
import ModalEdit from "../modal/modalEdit/ModalEdit";
import CellCourse from "../cellCourse/CellCourse";
let data = [
  {
    id: "1",
    name: "TRIGOs",
    openCourse: "12:00",
    finishCourse: "12:00",
    day: "1",
  },
  {
    id: "4",
    name: "TRIGOs",
    openCourse: "12:00",
    finishCourse: "12:00",
    day: "1",
  },
  {
    id: "4asd",
    name: "TRIGOs",
    openCourse: "12:00",
    finishCourse: "12:00",
    day: "1",
  },
  {
    id: "4qwe",
    name: "TRIGOs",
    openCourse: "12:00",
    finishCourse: "12:00",
    day: "1",
  },
  {
    id: "2",
    name: "comunicacion",
    openCourse: "12:00",
    finishCourse: "12:00",
    day: "2",
  },
  {
    id: "3",
    name: "react",
    openCourse: "12:00",
    finishCourse: "12:00",
    day: "1",
  },
];
import { useState } from "react";
const Table = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [idSelect, setIdSelect] = useState("");

  const handlerModal1 = (id) => {
    setOpenModal1(!openModal1);
    setIdSelect(id);
  };
  const handlerModal = (id) => {
    setOpenModal(!openModal);
    setIdSelect(id);
  };
  const cellCourses = (number) => {
    return data
      .filter((course) => course.day === number)
      .map((value) => (
        <CellCourse
          key={value.id}
          value={value}
          f1={handlerModal1}
          f2={handlerModal}
          ic1={<IconEdit />}
          ic2={<IconDelete />}
        />
      ));
  };
  const maxColumn = () => {
    let cts = [0, 0, 0, 0, 0, 0, 0];
    data.forEach((element) => {
      if (element.day === "1") cts[0]++;
      if (element.day === "2") cts[1]++;
      if (element.day === "3") cts[2]++;
      if (element.day === "4") cts[3]++;
      if (element.day === "5") cts[4]++;
      if (element.day === "6") cts[5]++;
      if (element.day === "7") cts[6]++;
    });
    return Math.max(...cts) < 4 ? 4 : Math.max(...cts);
  };
  const cellCoursesModel = (number) => {
    // calcular
    let model = [];
    // cuanto es el maximo de cursos en una columna
    let max = maxColumn();
    const cantCourse = data.filter((course) => course.day === number).length;
    for (let i = 0; i < max - cantCourse; i++) {
      model.push(<div key={i} className="container_cell"></div>);
    }
    return model;
  };
  const deleteCourse = () => {
    console.log(`Eliminando ${idSelect}`);
    const newCourses = data.filter((course) => course.id !== idSelect);
    console.log(newCourses);
    data = newCourses;
    console.log("eliminado");
  };
  return (
    <>
      <div className="container_table">
        <div className="container_column">
          <div className="container_column_title">lunes</div>
          {cellCourses("1")}
          {cellCoursesModel("1")}
        </div>
        <div className="container_column">
          <div className="container_column_title">martes</div>
          {cellCourses("2")}
          {cellCoursesModel("2")}
        </div>
        <div className="container_column">
          <div className="container_column_title">mi??rcoles</div>
          {cellCourses("3")}
          {cellCoursesModel("3")}
        </div>
        <div className="container_column">
          <div className="container_column_title">jueves</div>
          {cellCourses("4")}
          {cellCoursesModel("4")}
        </div>
        <div className="container_column">
          <div className="container_column_title">viernes</div>
          {cellCourses("5")}
          {cellCoursesModel("5")}
        </div>
        <div className="container_column">
          <div className="container_column_title">s??bado</div>
          {cellCourses("6")}
          {cellCoursesModel("6")}
        </div>
        <div className="container_column">
          <div className="container_column_title">domingo</div>
          {cellCourses("7")}
          {cellCoursesModel("7")}
        </div>
      </div>
      <ModalDelete
        openModal={openModal}
        setOpenModal={setOpenModal}
        deleteCourse={deleteCourse}
      />
      <ModalEdit openModal={openModal1} setOpenModal={setOpenModal1} />
    </>
  );
};

export default Table;
