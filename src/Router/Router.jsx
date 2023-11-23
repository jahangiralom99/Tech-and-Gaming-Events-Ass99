import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllService from "../Pages/ALlService/AllService";
import PrivetRoute from "./PrivetRoute";
import About from "../Pages/About/About";
import GamesEvent from "../Pages/GamesEvent/GamesEvent";
import Games from "../Pages/Games/Games";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/events.json"),
      },
      {
        path: "/event/:id",
        element: (
          <PrivetRoute>
            <EventDetails></EventDetails>
          </PrivetRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/service",
        element: (
          <PrivetRoute>
            <AllService></AllService>
          </PrivetRoute>
        ),
        loader: () => fetch("/service.json"),
      },
      {
        path: "/gamesEvent",
          element: <PrivetRoute><GamesEvent></GamesEvent></PrivetRoute>
      },
      {
        path: "/games/:id",
        element: <PrivetRoute><Games></Games></PrivetRoute>,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
