import styled from "styled-components";
const colorBack = "#d81e5b";
const ContainerSelectDay = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(7, 1fr);
  padding: 0.625rem 0.9375rem;
  border: 2px solid #e9ecef;
  border-radius: 5px;
`;
const ContainerInput = styled.div`
  padding: 0.625rem 0.9375rem;
  display: grid;
  grid-template-columns: 85% 15%;
  position: relative;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  .select {
    margin-left: 0.625rem;
  }
`;
const ContainerSchedule = styled.div`
  padding: 0.9375rem;
  gap: 0.625rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  border: 2px solid #e9ecef;
  border-radius: 5px;
`;
const NameInputContainer = styled.span`
  top: -10px;
  left: 5px;
  position: absolute;
  font-size: 0.8125rem;
  padding: 0 0.3125rem;
  border-radius: 5px;
  background-color: white;
  font-weight: 700;
`;
const Boton = styled.button`
  padding: 0.925rem 1.875rem;
  color: #fff;
  border: none;
  background: ${colorBack ? colorBack : "#09c598"};
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.3s ease all;
  &:hover {
    filter: grayscale(30%);
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
  .not-valid {
    border: 2px solid #d81e5c7a;
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
