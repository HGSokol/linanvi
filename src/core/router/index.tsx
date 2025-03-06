import { createBrowserRouter } from "react-router-dom";

import homeModule from "../../pages";

const Router = () => {
  const pages = Object.values(homeModule).flat();
  const router = createBrowserRouter(pages);

  return router;
};

export default Router;
