import "./App.css";
import Navegation from "./components/Navegation/Navegation";
import Table from "./components/Table/Table";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import data1 from "./data/coursesData.json";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`;
const darkTheme = {
  body: "#1c1c1c",
  icon: "#ffffffca",
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
