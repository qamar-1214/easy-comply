import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ContextProvider from "./context/ContextProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <ToastContainer />
        <SkeletonTheme baseColor="#f3f3f3" highlightColor="white">
          <App />
        </SkeletonTheme>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
