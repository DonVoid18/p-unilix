import React from "react";
import Modal from "../Modal";
import styled from "styled-components";
const ModalEdit = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      estado={openModal}
      cambiarEstado={setOpenModal}
      titulo="Establecer Horario"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"20px"}
    >
      <Contenido>
        <div>
          <p>Curso</p>
          <Section>
            <select name="" id="">
              <option value="">Selecionar</option>
            </select>
            <input type="text" placeholder="Nuevo curso" />
          </Section>
        </div>
        <p>Reutilizable y con opciones de personalización.</p>
        <Boton onClick={() => setOpenModal(!openModal)}>Agregar</Boton>
      </Contenido>
    </Modal>
  );
};

export default ModalEdit;

const Boton = styled.button`
  padding: 10px 30px;
  color: #fff;
  border: none;
  background: #1766dc;
  transition: 0.3s ease all;
  &:hover {
    background: #0066ff;
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
const Section = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 5px;
`;
