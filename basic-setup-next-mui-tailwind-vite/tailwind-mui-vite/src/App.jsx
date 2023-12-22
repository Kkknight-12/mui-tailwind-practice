const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: grey[200],
      dark: grey[500],
      contrastText: "#edf2ff",
    },
    secondary: {
      main: "#edf2ff",
    },
    qwiqwi: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      darker: "#005249",
      bohotDark: "#988e16",
      contrastText: "#242105",
    },
  },
  rangila: {
    khatarnak: "#d4e693",
  },
  statusss: {
    danger: "#93e6d0",
  },
})

import { Box } from "@mui/material"

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <>
      {/* <Button variant="contained">Hello world</Button>
      <CustomButton /> */}
      <Box sx={{ border: "10px solid red" }}>
        <p className="font-bold text-[green] text-lg font-mono">hello</p>
        {/*  */}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Box>
    </>
    // </ThemeProvider>
  )
}

export default App
