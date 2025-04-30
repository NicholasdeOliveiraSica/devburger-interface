import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css'

const globalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-family: 'Poppins', serif;
  };

  ::-webkit-scrollbar {
    width: 0px;
  }

  button {
    cursor: pointer;
  }

`;

export default globalStyles