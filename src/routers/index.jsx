import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts";
import {
  AddProduct,
  ErrorPage,
  Home,
  LogIn,
  SignUp,
  UpdateProduct,
  ProductsOfBrand,
  AllProducts,
  ProductDetails,
} from "../pages";
import PrivateRoutes from "../routers/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "/products/brand/:brand",
        element: <ProductsOfBrand />,
      },
      {
        path: "/",
        element: <PrivateRoutes />,
        children: [
          {
            path: "/add-product",
            element: <AddProduct />,
          },
          {
            path: "/products/update/:name",
            element: <UpdateProduct />,
          },
          {
            path: "/products/:name",
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
