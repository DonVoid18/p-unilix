import React, { useState } from "react";
import "./Navegation.css";
import logo from "../../assets/logo.png";
import ModalAgregarCurso from "../Modals/modalAgregarCurso/ModalAgregarCurso";
import ModalCruces from "../Modals/modalCruces/ModalCruces";
const Navegation = ({ dataProps }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container_logo">
          <img src={logo} alt="Logo" />
          <h1>UNILIX</h1>
        </div>
        <nav className="header_navegation">
          <ul>
            <li>
              <button
                onClick={() => setOpenModal(!openModal)}
                className="button_header1"
              >
                Agregar curso
              </button>
            </li>
            <li>
              <button
                onClick={() => setOpenModal1(!openModal1)}
                className="button_header2"
              >
                Cruces de horario
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <ModalAgregarCurso openModal={openModal} setOpenModal={setOpenModal} />
      <ModalCruces
        openModal={openModal1}
        setOpenModal={setOpenModal1}
        data={dataProps}
      />
    </>
  );
};

export default Navegation;
