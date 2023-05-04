import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Block/Layout";
import Signin from "../pages/Signin";
import GameHome from "../pages/GameHome";
import CreateGame from "../pages/CreateGame";
import ConfirmPage from "../pages/ConfirmPage";
import Just from "../pages/Just";
import PrivateRoute from "./privateRoute"
import Charts from "../pages/Charts";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element:
          <PrivateRoute>
            <GameHome />
          </PrivateRoute>,
      },
      {
        index: true,
        element: <Charts />,
        path: "chart",
      },
      {
        index: true,
        element: <Signin />,
        path: "sign-in",
      },
      {
        index: true,
        element: <ConfirmPage />,
        path: "confirm/:id/:token",
      },
      {
        index: true,
        element: <Just />,
        path: "just",
      },
      {
        index: true,
        element:
          <PrivateRoute><CreateGame /></PrivateRoute>
        ,
        path: "create-game",
      },
    ],
  },
]);
