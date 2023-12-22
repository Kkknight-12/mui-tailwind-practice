// @flow
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

const HeroText = styled("p")(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.primaryy[500]
      : theme.palette.secondary.light,
}));

const HeroContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.success.dark
      : theme.palette.secondary.main,
}));

export const Hero = () => {
  const theme = useTheme();
  console.log("theme.palette ", theme.palette);

  return (
    <HeroContainer className="flex items-center justify-center rounded-2xl p-8 mx-auto">
      <HeroText className="text-6xl">Mayank Sarasiya</HeroText>
    </HeroContainer>
  );
};
