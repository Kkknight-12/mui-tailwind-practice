import { useTheme } from "@emotion/react"

export default function CustomButton() {
  const theme = useTheme()
  console.log("theme ", theme.statusss)
  console.log("theme rangila ", theme.rangila)
  return (
    <>
      <button
        style={{
          color: `${theme.palette.primary.main}`,
          background: `${theme.palette.primary.light}`,
        }}
      >
        click
      </button>

      <br />
      <button style={{ background: `${theme.palette.qwiqwi.light}` }}>
        click
      </button>

      <br />
      <button style={{ background: `${theme.palette.qwiqwi.bohotDark}` }}>
        click
      </button>

      <br />
      <button style={{ background: `${theme.statusss.danger}` }}>click</button>

      <br />
      <button style={{ background: `${theme.rangila.khatarnak}` }}>
        click
      </button>
    </>
  )
}
