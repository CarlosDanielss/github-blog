import { createBrowserRouter } from "react-router-dom";

import { Router } from "./@types/react-router-dom";

import { DefaultLayout } from "./pages/_layouts/default-layout";
import { Home } from "./pages/home/home";
import { Post } from "./pages/post/post";

export const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
]);
