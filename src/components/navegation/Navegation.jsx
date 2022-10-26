import React, { useState } from "react";
import "./Navegation.css";
import logo from "../../assets/logo.png";
import ModalAgregarCurso from "../Modals/ModalAgregarCurso/ModalAgregarCurso";
import ModalCruces from "../Modals/ModalCruces/ModalCruces";
import Icon_darkMode from "../Icon_darkMode/Icon_darkMode";
import { useTheme } from "styled-components";
import styled from "styled-components";

const Navegation = ({ dataProps, toggleTheme, isDarkTheme }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const theme = useTheme();
  return (
    <>
      <header className="header">
        <div className="container_logo">
          <img src={logo} alt="Logo" />
          <Title color={theme.text}>UNILIX</Title>
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
            <li>
              <Icon_darkMode
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
              />
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

const Title = styled.h1`
  color: ${(props) => props.color};
`;
