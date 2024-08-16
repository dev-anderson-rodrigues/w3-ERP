import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  background-color: #FFFFFF;
  box-sizing: border-box;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
}

h1 {
  height: 38.4px;
  width: 172.7px;
}
h3 {
  font-size: 36px;
  font-weight: 700;
  line-height: 50.4px;
  font-family: Sora, Poppins, Helvetica, sans-serif ;
}
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

button {
  background-color: #001C98;
  height: 56px;
  width: 400px;
  padding: 12px, 64px, 12px, 64px;
  gap: 10px;
  border-radius: 16px;
}
`