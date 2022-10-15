import React from "react";
import Navegation from "./components/navegation/Navegation";
import "./App.css";
import Table from "./components/table/Table";
const App = () => {
  return (
    <>
      <Navegation />
      <main>
        <Table />
      </main>
    </>
  );
};

export default App;
