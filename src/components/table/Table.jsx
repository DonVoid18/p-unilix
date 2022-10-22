import "./Table.css";
import IconDelete from "../Icon_button/IconDelete";
import IconEdit from "../Icon_button/IconEdit";
import CellCourse from "../CellCourse/CellCourse";
import ModalDelete from "../Modals/ModalDelete/ModalDelete";
import ModalEdit from "../Modals/ModalEdit/ModalEdit";
import { useState } from "react";
const Table = ({ dataProps, setDataProps }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [valueSelect, setValueSelect] = useState("");
  const handlerModal1 = (obj) => {
    setValueSelect(obj);
    setOpenModal1(!openModal1);
  };
  const handlerModal = (obj) => {
    setValueSelect(obj);
    setOpenModal(!openModal);
  };
  const cellCourses = (number) => {
    return dataProps
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
      })
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
    dataProps.forEach((element) => {
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
    const cantCourse = dataProps.filter(
      (course) => course.day === number
    ).length;
    for (let i = 0; i < max - cantCourse; i++) {
      model.push(<div key={i} className="container_cell"></div>);
    }
    return model;
  };
  const deleteCourse = () => {
    const newCourses = dataProps.filter(
      (course) => course.id !== valueSelect.id
    );
    setDataProps(newCourses);
  };
  const modifiedCourse = () => {
    // modificar
    const newCourses = dataProps.filter(
      (course) => course.id !== valueSelect.id
    );
    const newData = [...newCourses, valueSelect];
    setDataProps(newData);
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
          <div className="container_column_title">miércoles</div>
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
          <div className="container_column_title">sábado</div>
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
      <ModalEdit
        openModal={openModal1}
        setOpenModal={setOpenModal1}
        modifiedCourse={modifiedCourse}
        objModified={valueSelect}
        setValueSelect={setValueSelect}
      />
    </>
  );
};

export default Table;
