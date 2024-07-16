import {
  createBrowserRouter,
} from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Accounts from "../DashBoard/CommonRoutes/Accounts";
import SentMoney from "../DashBoard/UserRoutes/SentMoney";
import CashOut from "../DashBoard/UserRoutes/CashOut";
import BalanceInquire from "../DashBoard/UserRoutes/BalanceInquire";
import TransictionsHistory from "../DashBoard/CommonRoutes/TransictionsHistory";
import CashIn from "../DashBoard/UserRoutes/CashIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
    {
    path:"/account",
    element:<Accounts/>    
    },
    {
    path:"/sentmoney",
    element:<SentMoney/> 
    },
    {
    path:"/cashout",
    element:<CashOut/>
    },
    {
    path:"/cashin",
    element:<CashIn/>
    },
    {
    path:"/balanceinquiry",
    element:<BalanceInquire/>
    },
    {
      path:"/transaction",
      element:<TransictionsHistory/>
    }
      
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Registration></Registration>
  }
 
]);
