import React from "react";
import Navegation from "./components/Navegation/Navegation";
import "./App.css";
import Table from "./components/Table/Table";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
let data1 = [
  {
    id: "1",
    name: "PSICOLOGÍA SISTEMATICA",
    openCourse: "11:00",
    finishCourse: "13:15",
    day: "1",
  },
  {
    id: "78",
    name: "TALLER DE METODOLOGÍA DE SISTEMAS BLANDOS",
    openCourse: "09:30",
    finishCourse: "11:00",
    day: "2",
  },
  {
    id: "4",
    name: "ALGORITMO Y ESTRUCTURA DE DATOS",
    openCourse: "11:00",
    finishCourse: "12:30",
    day: "2",
  },
  {
    id: "4asd",
    name: "contabilidad",
    openCourse: "15:00",
    finishCourse: "16:30",
    day: "2",
  },
  {
    id: "4qwe",
    name: "SISTEMAS BIOLOGICOS",
    openCourse: "07:15",
    finishCourse: "09:30",
    day: "3",
  },
  {
    id: "2",
    name: "TELECOMUNICACIONES",
    openCourse: "18:00",
    finishCourse: "19:30",
    day: "4",
  },
  {
    id: "3",
    name: "ALGORITMOS Y ESTRUCTURA DE DATOS",
    openCourse: "08:45",
    finishCourse: "10:15",
    day: "5",
  },
];
const StyledApp = styled.div`
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`;
const darkTheme = {
  body: "#1c1c1c",
  icon: "#b6b6b6",
  text: "white",
  tableColor: "#0c0c0c",
  cellColor: "#1c1c1c",
  textColor: "white",
};
const lightTheme = {
  body: "#fff",
  icon: "#1c1c1c",
  text: "#1c1c1c",
  tableColor: "#f9fafb",
  cellColor: "#e9ecef",
  textColor: "black",
};
const App = () => {
  const [dataCourses, setDataCourses] = useState(data1);
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <Navegation
          dataProps={dataCourses}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <main>
          <Table dataProps={dataCourses} setDataProps={setDataCourses} />
        </main>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
