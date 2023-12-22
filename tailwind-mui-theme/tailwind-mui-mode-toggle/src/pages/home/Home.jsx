import { Box, Stack } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import React from "react"

export default function Home() {
  const theme = useTheme()
  console.log("theme ", theme)

  console.log(
    "bg ",
    [
      theme.mode === "dark" && theme.palette.primary.main,
      theme.mode !== "dark" && theme.palette.primary.main,
    ]
      .filter(Boolean)
      .join(" ")
  )
  return (
    <main
      style={{
        background: [
          theme.mode === "dark" && theme.palette.primary.main,
          theme.mode !== "dark" && theme.palette.primary.main,
        ]
          .filter(Boolean)
          .join(" "),
        color: [
          theme.mode === "dark" && theme.palette.secondary.main,
          theme.mode !== "dark" && theme.palette.secondary.main,
        ]
          .filter(Boolean)
          .join(" "),
      }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "100%" }}
        gap={2}
      >
        <p className="text-6xl ">Mayank Sarasiya</p>
        <p className="text-4xl ">Frontend Developer</p>
      </Stack>
    </main>
  )
}
