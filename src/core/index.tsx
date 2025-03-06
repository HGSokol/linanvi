import { RouterProvider } from "react-router-dom";
import Router from "./router";

const router = Router();

const Core = () => {
  return <RouterProvider router={router} />;
};

export default Core;
