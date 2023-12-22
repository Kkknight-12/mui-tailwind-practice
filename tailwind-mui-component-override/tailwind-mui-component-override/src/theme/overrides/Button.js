export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          console.log("onwerState", ownerState);
          return {
            //
            width: "max-content",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            //
            // if variant is contained and color is primary
            ...(ownerState.variant === "contained" &&
              ownerState.color === "primary" && {
                borderRadius: 0,
                textTransform: "none",
                fontSize: 16,
                padding: "6px 12px",
                lineHeight: 1.5,
                color: "#fff",
                backgroundColor: "#4b00cc",
                borderColor: "#5342c1",
                "&:hover": {
                  backgroundColor: "#5342c1",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
              }),
          };
        },
      },
    },
  };
}

// {
//     borderRadius: 0,
//         textTransform: "none",
//     fontSize: 16,
//     padding: "6px 12px",
//     width: "max-content",
//     lineHeight: 1.5,
//     color: "#fff",
//     backgroundColor: "#4b00cc",
//     borderColor: "#5342c1",
//     "&:hover": {
//     backgroundColor: "#5342c1",
//         borderColor: "#0062cc",
//         boxShadow: "none",
// },
