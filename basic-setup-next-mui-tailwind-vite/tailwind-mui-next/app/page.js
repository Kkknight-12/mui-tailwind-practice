"use client"
import { Box, ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ border: "10px solid red" }}>
        <p className="font-bold text-[green] font-mono">hello</p>
        {/*  */}
        <h1 className="text-9xl font-bold underline">Hello world!</h1>
      </Box>
    </ThemeProvider>
  )
}
