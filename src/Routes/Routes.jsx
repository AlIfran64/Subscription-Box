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
        element: <Home></Home>,
        hydrateFallbackElement: (
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ),
        loader: () => fetch('../../JSON Data/SubscriptionService/subscriptionService.json')
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