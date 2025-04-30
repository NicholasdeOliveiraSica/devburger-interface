import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 70%;
  height: 60px;
  margin-top: 40px;
  border-radius: 5px;

  background-color: #9758A6;

  color: #fff;
  font: 400 30px 'Road Rage', serif;

  border: none;

  transition-duration: 0.1s ;

  &:hover {
    opacity: 90%;
    width: 69.5%;
  }

  &:active {
    background-color: #6F357C;
    border: 2px dashed #fff;
    width: 69%;
    height: 58px;
  }
`