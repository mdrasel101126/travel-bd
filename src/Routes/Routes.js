import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Access/Login/Login";
import Register from "../pages/Access/Register/Register";
import BookForm from "../pages/BookForm/BookForm";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/bookform",
        element: <BookForm></BookForm>,
      },
      {
        path: "/bookingroom",
        element: <Booking></Booking>,
        loader: () => fetch("http://localhost:5000/hotels"),
      },
    ],
  },
]);

export default routes;
