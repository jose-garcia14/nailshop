import { StyledEngineProvider } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import "./NavbarStyle.css";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar></Navbar>
    </StyledEngineProvider>
  );
};

export default App;
