import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./component/pages/HomePage/HomePage";
import AboutPage from "./component/pages/AboutPage/AboutPage";
import ShopPage from "./component/pages/ShopPage/ShopPage";
import ContactPage from "./component/pages/ContactPage/ContactPage";
import ProductsProvider from "./component/Context/ProductsContext";
import ProductPage from "./component/pages/ShopPage/ProductPage";
import CheckOut from "./component/CheckOut";
import Cart from "./component/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  { path: "/shop/product/:ProductId", element: <ProductPage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <CheckOut /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </StrictMode>
);
