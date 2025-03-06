import { RouteObject } from "react-router-dom";

import Layout from "../layouts/home-layout";
import HomePage from "./home";
import PolicyPage from "./policy";

const homeModule: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "policy",
        element: <PolicyPage />,
      },
    ],
  },
];

export default homeModule;
