import React from "react";
import Modal from "../Modal";
import styled from "styled-components";
const ModalCruces = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      estado={openModal}
      cambiarEstado={setOpenModal}
      titulo="Cruces de horarios"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"20px"}
      widthContenedor={"700px"}
    >
      <Contenido>
        {/* //TODO contenedores de cruces de horario */}
        <p>No existe ningún cruce de horario.</p>
        <Boton onClick={() => setOpenModal(!openModal)}>Aceptar</Boton>
      </Contenido>
    </Modal>
  );
};

export default ModalCruces;

const Boton = styled.button`
  padding: 0.925rem 1.875rem;
  color: #fff;
  border: none;
  background: #1766dc;
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.3s ease all;
  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  display: grid;
  gap: 1.5em;
  select {
    padding: 0.625rem;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
  }
  input {
    padding: 0.625rem;
    outline: none;
    border-radius: 5px;
    border: none;
    font-size: 1em;
  }
`;
