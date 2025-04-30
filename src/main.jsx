import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { inject } from "@vercel/analytics";

inject();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
