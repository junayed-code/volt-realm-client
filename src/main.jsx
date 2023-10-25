import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routers";
import { RouterProvider } from "react-router-dom";
import { AuthProvider, CartStorageProvider } from "./providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartStorageProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </CartStorageProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
