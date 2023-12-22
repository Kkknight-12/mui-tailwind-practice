import { ThemeProvider, GlobalStyles } from "@mui/material";
import { createTheme } from "@mui/material";
import * as React from "react";
import { amber, grey } from "@mui/material/colors";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const ModeToggle = ({ children }) => {
  const [mode, setMode] = React.useState("dark");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                mode: "light",
                primaryy: amber,
                divider: amber[200],
                // background: {
                //   default:
                //     'linear-gradient(to bottom, transparent, rgb(255,255,255)) rgb(214,219,220)',
                // },
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                qwiqwi: {
                  main: "#E3D026",
                  light: "#E9DB5D",
                  dark: "#A29415",
                  darker: "#005249",
                  bohotDark: "#988e16",
                  contrastText: "#242105",
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[700],
                background: {
                  // default: grey[900],
                  // default: (slot),
                  // default:
                  //   'linear-gradient(to bottom, transparent, rgb(0,0,0)) rgb(0,0,0)',
                  paper: grey[900],
                  fff: "red",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
                tez: {
                  main: "#E3D026",
                  light: "#E9DB5D",
                  dark: "#A29415",
                  darker: "#005249",
                  bohotDark: "#988e16",
                  contrastText: "#242105",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor:
              mode === "dark" && theme.palette.background.default,
          },
        }}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
