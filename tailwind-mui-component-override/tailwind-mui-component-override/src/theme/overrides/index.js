import Button from "./Button";
import Input from "./Input";

export default function ComponentOverride(theme) {
  return Object.assign(Button(theme), Input(theme));
}
