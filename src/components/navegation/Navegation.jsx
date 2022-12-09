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
  const [activeMenu, setActiveMenu] = useState(false);
  const theme = useTheme();
  return (
    <>
      <header className="header">
        <div className="container_logo">
          <img src={logo} alt="Logo" />
          <Title color={theme.text}>UNILIX</Title>
          <BannerBeta>Beta</BannerBeta>
        </div>
        <nav
          className={`header_navegation header_navegation_responsive${
            activeMenu ? " active_menu" : ""
          }`}
        >
          <ul>
            <li>
              <button
                onClick={() => setOpenModal(!openModal)}
                className="btn_navegation"
                id="btnAddCourse"
              >
                Agregar curso
              </button>
            </li>
            <li>
              <button
                onClick={() => setOpenModal1(!openModal1)}
                className="btn_navegation"
                id="btnCrossesCourse"
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
          {activeMenu ? (
            <div className="container_bClosed_navegation">
              <ButtonMenuResponsive
                color={theme}
                onClick={() => setActiveMenu(!activeMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.875rem"
                  height="1.875rem"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </svg>
              </ButtonMenuResponsive>
            </div>
          ) : undefined}
          {activeMenu ? (
            <div className="container_logo active_menu">
              <img src={logo} alt="Logo" />
              <Title color={theme.text}>UNILIX</Title>
            </div>
          ) : undefined}
        </nav>
        <ButtonMenu
          className="button_toggle_menu"
          color={theme}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.875rem"
            height="1.875rem"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-activity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </svg>
        </ButtonMenu>
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
const ButtonMenu = styled.button`
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color.cellColor};
  color: ${(props) => props.color.text};
  padding: 0.1875rem 0.25rem;
`;
const ButtonMenuResponsive = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color.text};
  color: ${(props) => props.color.cellColor};
  padding: 0.1875rem 0.25rem;
`;
const BannerBeta = styled.span`
  background-color: #ea0a0a;
  color: white;
  padding: 3px;
  border-radius: 5px;
  margin-left: 3px;
  font-weight: 600;
  font-size: 14px;
`;
