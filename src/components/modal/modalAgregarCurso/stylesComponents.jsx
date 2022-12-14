import styled from "styled-components";

const ContainerSelectDay = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(7, 1fr);
  padding: 0.625rem 0.9375rem;
  border: 1px solid #838994;
  border-radius: 5px;
`;
const ContainerInput = styled.div`
  padding: 0.625rem 0.9375rem;
  display: grid;
  grid-template-columns: 85% 15%;
  position: relative;
  border: 1px solid #838994;
  border-radius: 5px;
  .select {
    margin-left: 10px;
  }
`;
const ContainerSchedule = styled.div`
  padding: 0.9375rem;
  gap: 0.625rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  border: 1px solid #838994;
  border-radius: 5px;
`;
const NameInputContainer = styled.span`
  top: -10px;
  left: 5px;
  position: absolute;
  font-size: 13px;
  padding: 0 5px;
  border-radius: 5px;
  background-color: white;
`;
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
const Contenido = styled.form`
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
export {
  ContainerSelectDay,
  ContainerInput,
  NameInputContainer,
  Boton,
  Contenido,
  ContainerSchedule,
};
