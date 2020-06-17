import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
