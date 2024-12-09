import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Sponsor from "../pages/sponsor";
import Contact from "../pages/contact";
import MainLayOut from "../components/layout/MainLayOut";
import ErrorPage from "../pages/error";
import Login from "../pages/login/Login";
import ReceiptHistory from "../pages/receiptHistory";
import TicketHistory from "../pages/ticketsHistory";
import Events from "../pages/event";
import Products from "../pages/ticket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },

      {
        path: "/products-detail/:id",
        element: <Products />,
      },
      {
        path: "/sponsor",
        element: <Sponsor />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/my-cart",
      //   element: <MyCart />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/ticket-history", element: <TicketHistory /> },
      {
        path: "/receipt-history",
        element: <ReceiptHistory />,
      },
    ],
  },
]);

export default router;
