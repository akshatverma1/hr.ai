import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import App from "./App"
import "./index.css"
import Aichat from "./pages/Aichatbot/Aibot"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="/ai" element={<Aichat></Aichat>} />
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
)