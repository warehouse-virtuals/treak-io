import React from "react"
import ReactDOM from "react-dom/client"

import "./Services/LanguageService"
import "./index.css"

import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./Context/ThemeContext"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
