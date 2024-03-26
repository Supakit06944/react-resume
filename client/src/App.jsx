/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import Header from "./components/header.jsx";
import NavBar from "./components/navbar.jsx";
import About from "./components/About.jsx";
import MyProject from "./components/myproject.jsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <Header />
        <About />
        <MyProject />
      </ChakraProvider>
    </>
  );
}

export default App;
