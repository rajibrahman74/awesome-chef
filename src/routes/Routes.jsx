import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Register from "../components/LoginRegister/Register";
import Login from "../components/LoginRegister/Login";
import Blog from "../components/Blog";
import ChefDetails from "../components/chefAndDetails/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://awesome-chef-serer-rajibrahman74.vercel.app/chef"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/chef-details/:id",
        element: (
          <PrivateRoutes>
            <ChefDetails></ChefDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://awesome-chef-serer-rajibrahman74.vercel.app/chef/${params.id}`),
      },
    ],
  },
]);

export default router;