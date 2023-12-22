import { ThemeProvider, createTheme } from "@mui/material"
import * as React from "react"

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
})

export const ModeToggle = ({ children }) => {
  const [mode, setMode] = React.useState("light")

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
  }

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#edf2ff",
                },
                secondary: {
                  main: "#242105",
                },
                qwiqwi: {
                  main: "#E3D026",
                  light: "#E9DB5D",
                  dark: "#A29415",
                  darker: "#005249",
                  bohotDark: "#988e16",
                  contrastText: "#242105",
                },
                rangila: {
                  khatarnak: "#d4e693",
                },
                statusss: {
                  danger: "#93e6d0",
                },
              }
            : {
                primary: {
                  main: "#242105",
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
                rangila: {
                  khatarnak: "#d4e693",
                },
                statusss: {
                  danger: "#93e6d0",
                },
              }),
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
