import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Importando o BrowserRouter
import App from "./App";  // Supondo que App seja o seu componente principal

// Envolvendo seu App com o BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
