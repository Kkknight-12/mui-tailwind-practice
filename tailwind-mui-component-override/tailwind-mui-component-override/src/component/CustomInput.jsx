import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";

const CssTextField = styled(TextField)({
  "&": {
    border: "3px solid orange",
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const CustomInputBase = styled(InputBase)(({ theme }) => ({
  //  "label + &": {...}, it means select the current component (&)
  //  that is directly adjacent to a label element
  // the div that is directly adjacent to a label element
  "label + &": {
    marginTop: theme.spacing(3),
  },
  //  & symbol refers to the current component.
  //  In this case, it refers to the InputBase component.
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CustomMuiFilledInput = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  // select current element's direct child element which is label
  // , adjacent sibling element which is div
  // div
  //   label
  //   div
  "& > label + div": {
    marginTop: theme.spacing(3),
  },
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    color: "fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ValidationTextField = styled(TextField)({
  "&": {
    border: "3px solid red",
    color: "red",
  },
  "& label": {
    marginTop: 11,
    color: "red",
  },
  "& input:valid + fieldset": {
    borderColor: "#E0E3E7",
    borderWidth: 1,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 4,
    padding: "4px !important", // override inline-style
  },
});

const ariaLabel = { "aria-label": "description" };

export default function CustomizedInputsStyled() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr" },
        gap: 2,
      }}
      className="my-16 mx-4"
    >
      {/*  MuiInput */}
      <Input defaultValue="MuiInput" inputProps={ariaLabel} />

      {/* MuiInputBase */}
      <FormControl variant="standard">
        {/* FormControl is required for MuiInputBase to work.
        It is used to provide an additional style layer to the input element.
        It can also be used to attach a label, help text, and an input icon.

      */}
        <InputLabel shrink htmlFor="bootstrap-input">
          MuiInputBase
        </InputLabel>
        <CustomInputBase defaultValue="MuiInputBase" id="bootstrap-input" />
      </FormControl>

      {/* MuiFilledInput */}
      <CustomMuiFilledInput
        label="MuiFilledInput"
        defaultValue="MuiFilledInput"
        id="reddit-input"
        variant="filled"
        // style={{ marginTop: 11 }}
      />

      {/* MuiOutlinedInput */}
      <CssTextField label="MuiOutlinedInput" id="custom-css-outlined-input" />

      {/*passing  defaultValue="MuiOutlinedInput" */}
      <ValidationTextField
        label="MuiOutlinedInput"
        required
        variant="outlined"
        defaultValue="MuiOutlinedInput"
        id="validation-outlined-input"
      />
    </Box>
  );
}
