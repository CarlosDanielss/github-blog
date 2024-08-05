import { createBrowserRouter } from "react-router-dom";

import { Router } from "./@types/react-router-dom";

import { Home } from "./pages/home/home";
import { DefaultLayout } from "./pages/_layouts/default-layout";

export const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
