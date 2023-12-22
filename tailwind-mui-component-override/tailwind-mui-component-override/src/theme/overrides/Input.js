export default function Input(theme) {
  return {
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
          "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "green",
          "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "yellow",
          "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "blue",
          "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
          },
        },
      },
    },
  };
}
