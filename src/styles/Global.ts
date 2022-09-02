import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.theme.bgColor};
  padding: 10px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
`;
export default GlobalStyle;
