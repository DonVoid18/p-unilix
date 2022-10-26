import Modal from "../Modal";
import styled from "styled-components";
const ModalDelete = ({ openModal, setOpenModal, deleteCourse }) => {
  return (
    <Modal
      estado={openModal}
      cambiarEstado={setOpenModal}
      titulo="Eliminar horario"
      mostrarHeader={true}
      mostrarOverlay={true}
      posicionModal={"center"}
      padding={"20px"}
      colorText={"#ef233c"}
    >
      <Contenido>
        <p>¿Está seguro de eliminar este horario?</p>
        <Boton
          onClick={() => {
            setOpenModal(!openModal);
            deleteCourse();
          }}
        >
          Eliminar
        </Boton>
      </Contenido>
    </Modal>
  );
};

export default ModalDelete;

const Boton = styled.button`
  padding: 0.625rem 1.875rem;
  color: #fff;
  border: none;
  background: #ef233c;
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
