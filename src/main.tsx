import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";

import { Home } from "./Home.tsx";
import { Login } from "./Login.tsx";
import { SignUp } from "./SignUp.tsx";
import { Layout } from "./Layout.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]
  }
]);

createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
