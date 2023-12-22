import React from "react"
import ModeSwitch from "./component/ModeSwitch"
import { ModeToggle } from "./context/toggleMode"
import { Home } from "./pages/home"

function App() {
  return (
    <ModeToggle>
      <ModeSwitch />
      <Home />
    </ModeToggle>
  )
}

export default App
