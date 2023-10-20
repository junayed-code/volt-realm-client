import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routers";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
