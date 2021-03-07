import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import {ChakraProvider, extendTheme} from "@chakra-ui/react"

import App from "./App/App"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600: "#556bf4",
    500: "#6476e0",
  },
}

const theme = extendTheme({colors})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
