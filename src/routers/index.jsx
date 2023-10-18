import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <button className="btn btn-secondary text-lg">Click Me</button>,
  },
]);

export default router;
