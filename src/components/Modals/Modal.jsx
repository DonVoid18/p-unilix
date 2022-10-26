import React from "react";
import styled, { useTheme } from "styled-components";
import { useRef } from "react";
import useOnClickOutside from "../../utils/useOnClickOutside";
const Modal = ({
  children,
  estado,
  cambiarEstado,
  titulo = "Alerta",
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
  widthContenedor,
  colorText,
}) => {
  const theme = useTheme();
  let modalRef = useRef();
  useOnClickOutside(modalRef, () => cambiarEstado(false));
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal
            ref={modalRef}
            widthContenedor={widthContenedor}
            padding={padding}
            bgd={theme.body}
          >
            {mostrarHeader && (
              <EncabezadoModal colorText={colorText}>
                <h3>{titulo}</h3>
              </EncabezadoModal>
            )}

            <BotonCerrar
              onClick={() => cambiarEstado(false)}
              colorText={colorText}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0,0,0,.7)" : "rgba(0,0,0,0)"};
  padding: 2.5rem;
  display: flex;
  align-items: ${(props) =>
    props.posicionModal ? props.posicionModal : "center"};
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: ${(props) =>
    props.widthContenedor ? props.widthContenedor : "500px"};
  min-height: 6.25rem;
  background: #fff;
  backdrop-filter: blur(10px);
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 700;
    font-size: 1.1em;
    color: ${(props) => (props.colorText ? props.colorText : "#32D4A4")};
    letter-spacing: 1px;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;

  width: 1.875rem;
  height: 1.875rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: ${(props) => (props.colorText ? props.colorText : "#32D4A4")};

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
