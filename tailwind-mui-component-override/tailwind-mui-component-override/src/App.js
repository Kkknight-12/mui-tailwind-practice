import React from "react";
import { ModeToggle } from "./context/toggleMode";
import Layout from "./layout";
import { Hero } from "./component/Hero";
import { CustomButton } from "./component/CustomButton";
import Input from "@mui/material/Input";
import CustomizedInputsStyled from "./component/CustomInput";

// ------------------------------------------------------------------------------

function App() {
  return (
    <ModeToggle>
      <Layout>
        <Hero />
        <CustomButton />
        <CustomButton variant="contained" />

        <CustomizedInputsStyled />
      </Layout>
    </ModeToggle>
  );
}

export default App;
