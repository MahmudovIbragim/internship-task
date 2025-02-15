import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ReduxProviver from "./provider/ReduxProviver.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProviver>
        <App />
      </ReduxProviver>
    </BrowserRouter>
  </StrictMode>
);
