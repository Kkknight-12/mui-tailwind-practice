import React from "react";
import { ModeToggle } from "./context/toggleMode";
import Layout from "./layout";
import { Hero } from "./component/Hero";

// ------------------------------------------------------------------------------

function App() {
  return (
    <ModeToggle>
      <Layout>
        <Hero />
      </Layout>
    </ModeToggle>
  );
}

export default App;
