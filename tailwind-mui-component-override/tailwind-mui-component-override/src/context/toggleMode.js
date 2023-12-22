import { ThemeProvider, GlobalStyles } from "@mui/material";
import { createTheme } from "@mui/material";
import * as React from "react";
import { amber, grey } from "@mui/material/colors";
import ComponentOverride from "../theme/overrides";

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
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[700],
                background: {
                  paper: grey[900],
                  fff: "red",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  theme.components = ComponentOverride(theme);

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
