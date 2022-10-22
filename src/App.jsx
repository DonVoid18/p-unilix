import React from "react";
import Navegation from "./components/Navegation/Navegation";
import "./App.css";
import Table from "./components/Table/Table";
import { useState } from "react";
let data1 = [
  {
    id: "1",
    name: "LENGUAJE DE COMPILADORES",
    openCourse: "22:00",
    finishCourse: "23:00",
    day: "1",
  },
  {
    id: "78",
    name: "MATE",
    openCourse: "12:00",
    finishCourse: "13:00",
    day: "1",
  },
  {
    id: "4",
    name: "TELECOMUNICACIONES",
    openCourse: "12:00",
    finishCourse: "13:00",
    day: "1",
  },
  {
    id: "4asd",
    name: "c",
    openCourse: "05:00",
    finishCourse: "06:00",
    day: "1",
  },
  {
    id: "4qwe",
    name: "d",
    openCourse: "07:00",
    finishCourse: "08:30",
    day: "1",
  },
  {
    id: "2",
    name: "f",
    openCourse: "12:00",
    finishCourse: "13:00",
    day: "2",
  },
  {
    id: "3",
    name: "g",
    openCourse: "12:20",
    finishCourse: "15:45",
    day: "1",
  },
];
const App = () => {
  const [dataCourses, setDataCourses] = useState(data1);
  return (
    <>
      <Navegation dataProps={dataCourses} />
      <main>
        <Table dataProps={dataCourses} setDataProps={setDataCourses} />
      </main>
    </>
  );
};

export default App;
