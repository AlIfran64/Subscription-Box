import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Layouts/Home/Home";
import SubscriptionPlans from "../Layouts/SubscriptionPlans/SubscriptionPlans";
import ThisWeeksBox from "../Layouts/ThisWeeksBox/ThisWeeksBox";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SubscriptionServiceDetails from "../Pages/SubscriptionServiceDetails/SubscriptionServiceDetails";
import Payment from "../Pages/Payment/Payment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../Layouts/MyProfile/MyProfile";



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
        path: '/SubscriptionPlans',
        element: <SubscriptionPlans></SubscriptionPlans>
      },
      {
        path: '/ThisWeeksBox',
        element: <PrivateRoutes>
          <ThisWeeksBox></ThisWeeksBox>
        </PrivateRoutes>,
        hydrateFallbackElement: (
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ),
        loader: () => fetch('../../JSON Data/SubscriptionService/subscriptionService.json')
      },
      {
        path: '/MyProfile',
        element: <PrivateRoutes>
          <MyProfile></MyProfile>
        </PrivateRoutes>
      },
      {
        path: '/SubscriptionServiceDetails/:id',
        element: <PrivateRoutes>
          <SubscriptionServiceDetails></SubscriptionServiceDetails>
        </PrivateRoutes>,
        hydrateFallbackElement: (
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ),
        loader: () => fetch('../../JSON Data/SubscriptionService/subscriptionService.json')
      },
      {
        path: '/Payment',
        element: <PrivateRoutes>
          <Payment></Payment>
        </PrivateRoutes>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      }

    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }


]);