import React from "react";
import Modal from "../Modal";
import styled from "styled-components";
const ModalEdit = ({ openModal, setOpenModal, modifiedCourse }) => {
  return (
    <Modal
      estado={openModal}
      cambiarEstado={setOpenModal}
      titulo="Modificar Horario"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"20px"}
    >
      <Contenido>
        <div>
          <input type="text" />
          horario
        </div>
        <Boton
          onClick={() => {
            setOpenModal(!openModal);
            modifiedCourse();
          }}
        >
          Modificar
        </Boton>
      </Contenido>
    </Modal>
  );
};

export default ModalEdit;

const Boton = styled.button`
  padding: 10px 30px;
  color: #fff;
  border: none;
  background: #09c598;
  transition: 0.3s ease all;
  &:hover {
    filter: grayscale(30%);
  }
`;

const Contenido = styled.div`
  display: grid;
  gap: 1em;
  p {
    font-size: 1em;
    padding-bottom: 0.5em;
  }
  select {
    padding: 10px;
    outline: none;
  }
  input {
    padding: 10px;
    outline: none;
  }
`;
