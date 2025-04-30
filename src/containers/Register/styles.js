import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"
import BackgroundLogin from "../../assets/background-1.svg"
import Pattern from "../../assets/pattern-1.svg"

export const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  color: white;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SectionOne = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50vw;
  height: 100vh;

  background: url('${BackgroundLogin}');
  background-position: center;
  background-size: cover;

  img {
    width: 60%;
    transition-duration: 0.2s;
    &:hover {
      width: 62%;
    }
  }

  @media (max-width: 800px) {
    width: 100vw;
    height: 30vh;

    img {
      padding: 15px;
      height: 100%;
      width: auto;
    }
  }
  @media (max-width: 800px) {
    img {
      width: 90%;
    }
  }
`
export const SectionTwo = styled.section`
  width: 50vw;
  height: 100vh;

  background-color: #252525;
  background-image: url('${Pattern}');
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 800px) {
    width: 100vw;
  }
`

export const Title = styled.h1`
  font-family: "Road Rage", serif;
  font-size: 60px;
  font-weight: 400;
  color: #9758A6;

  text-align: center;

  line-height: 40px;
  margin-bottom: 60px;
  margin-top: 40px;

  @media (max-width: 600px) {
    font-size: 40px;
    margin-bottom: 30px;
    margin-top: 40px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%; 
  @media (max-width: 1250px) {
    div {
      width: 100%;
      max-width: 335px;
    }
  }
`

export const Link = styled(RouterLink)`
  width: 70%;
  margin: 40px 0px;
  text-align: start;
  color: #fff;
  text-decoration: none;

  font: 700 18px 'Poppins', serif;

  @media (max-width: 1250px) {
    text-align: center;
    width: 70%;
  }
`
export const LinkPhrase = styled.p`
  width: 70%;
  margin: 40px 0px;
  text-align: start;
  color: #fff;
  text-decoration: none;

  font: 700 18px 'Poppins', serif;

  @media (max-width: 1250px) {
    text-align: center;
    width: 70%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 13vh;
  width: 27vw;

  transition-duration: .2s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  p {
    color:#d84c4c;
  }

`

export const Label = styled.label`
  font: 600 17px 'Poppins', serif;
  line-height: 27px;
  cursor: pointer;
`
export const Input = styled.input`
  height: 50%;
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: 100%;
  font: 400 18px 'Poppins', serif;
`



