import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/common/Layout";
import { HomeScreen } from "../pages/HomeScreen";
import { Detail } from "../pages/Detail";
import { Price } from "../pages/Price";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        index: true,
        path: "/detail/:id/buy",
        element: <Price />,
      },
    ],
  },
]);
