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
import { productLoader } from "../pages/ProductDetails";
import PrivateRoutes from "../routers/PrivateRoutes";

const API_END_POINT = "https://volt-realm-api.vercel.app/products";

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
        loader: () => fetch(API_END_POINT),
      },
      {
        path: "/products/brand/:name",
        element: <ProductsOfBrand />,
        loader: async ({ params }) => {
          const res = await fetch(`${API_END_POINT}?brand=${params.name}`);
          const resObject = await res.json();
          if (resObject.error) {
            throw new Response(null, {
              status: resObject.error?.status,
              statusText: resObject.error?.message,
            });
          }
          return resObject.data;
        },
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
            loader: productLoader,
          },
          {
            path: "/products/:name",
            element: <ProductDetails />,
            loader: productLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
