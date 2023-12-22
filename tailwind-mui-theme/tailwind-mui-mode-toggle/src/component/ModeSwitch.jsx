import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { useTheme } from "@mui/material/styles"
import * as React from "react"
import { ColorModeContext } from "../context/toggleMode"

export default function ModeSwitch() {
  const theme = useTheme()
  const { toggleColorMode } = React.useContext(ColorModeContext)

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
      className="flex w-full items-center justify-center p-3"
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  )
}
