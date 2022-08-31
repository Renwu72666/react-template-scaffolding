import { App } from "@/containers/App";
import { BrowserRouter, useRoutes } from "react-router-dom";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
