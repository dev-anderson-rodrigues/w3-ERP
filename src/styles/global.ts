import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&display=swap');
:root {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  background-color: #FFFFFF;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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