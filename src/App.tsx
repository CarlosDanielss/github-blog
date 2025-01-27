import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | GitHub Blog" />

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
