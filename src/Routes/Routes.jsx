import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Layouts/Home/Home";
import SubscriptionPlans from "../Layouts/SubscriptionPlans/SubscriptionPlans";
import ThisWeeksBox from "../Layouts/ThisWeeksBox/ThisWeeksBox";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/subscription',
        element: <SubscriptionPlans></SubscriptionPlans>
      },
      {
        path: '/thisWeeksBox',
        element: <ThisWeeksBox></ThisWeeksBox>
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }


]);