import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllService from "../Pages/ALlService/AllService";
import PrivetRoute from "./PrivetRoute";

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
        element: <AllService></AllService>,
      },
      {
        path: "/",
        element: <h1></h1>,
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
