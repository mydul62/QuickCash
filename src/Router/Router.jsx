import {
  createBrowserRouter,
} from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      }
    ]
  },
 
]);
