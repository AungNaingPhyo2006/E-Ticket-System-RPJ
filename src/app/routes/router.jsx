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
import Register from "../pages/register/Register";
import ProductDetails from "../pages/productDetails";
import AllProductList from "../pages/allProductList";
import TicketList from "../pages/ticketLists/TicketLists";
import TicketDetail from "../pages/ticketDetails/TicketDetails";

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
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/ticket-history", element: <TicketHistory /> },
      {
        path: "/receipt-history",
        element: <ReceiptHistory />,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetails/>,
      },
      {
        path: "/product-list/:id",
        element: <AllProductList/>,
      },
      {
        path: "/ticketLists",
        element: <TicketList/>,
      },
      {
        path: "/ticket-detail/:ticketId",
        element: <TicketDetail/>,
      },
    ],
  },
]);

export default router;
