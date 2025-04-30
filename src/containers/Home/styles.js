import BannerHome from '../../assets/banner-home.svg';
import Pattern from '../../assets/pattern-1.svg';
import styled from 'styled-components';

export const Header = styled.header``
export const Banner = styled.section`

  background-image: url('${BannerHome}');
  background-size: cover;
  background-position: center;

  height: 45vh;

  h1 {
    
    color: #dfdfdf;
    font-family: "Road Rage", serif;
    font-size: 80px;
    font-weight: 400;

    position: absolute;
    top: 5vh;
    right: 6vw;

  }

  @media (max-width: 1000px) {
    height: 30vh;

    h1 {
    
    font-size: 60px;

    position: absolute;
    top: 5vh;
    right: 35vw;

  }
  }
`
export const Main = styled.main`

  background: 
    linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Pattern}');

  background-size: 960px;
  background-repeat: repeat;
  background-position: top left;

  height: 1000px;

`
export const SecOne = styled.section`
  h1 {

    color: #9758A6;
    font: normal 800 30px 'Poppins', sans-serif;
    text-align: center;
    padding: 20px;

  }

  img {
    position: relative;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`
export const Container = styled.div`

  background-color: #fff;
  height: 200px;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px; 
  border: 2px solid #9758A6;

  h1 {
    color: #000;
    font: normal 800 80px 'Poppins', sans-serif;
  }
`
export const Content = styled.div``
export const SecTwo = styled.section``
export const Footer = styled.footer`

  background-color: #5C2669;
  height: 40px;
  position: static;
  bottom: 0;

  p {
    color: #fff;
    font: normal 400 15px 'Poppins', sans-serif;
    text-align: center;
    padding: 8px;
  }
`
