import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import DashBoard from "../pages/dashBoard";
import AddCardPage from "../pages/addCardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/dashboard",
    element: <DashBoard/>
  },
  {
    path: "/addCard",
    element: <AddCardPage/>
  }
]);