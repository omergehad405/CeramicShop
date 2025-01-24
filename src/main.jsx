import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./component/pages/HomePage/HomePage";
import AboutPage from "./component/pages/AboutPage/AboutPage";
import ShopPage from "./component/pages/shopPage/shopPage";
import ContactPage from "./component/pages/ContactPage/ContactPage";
import ProductsProvider from "./component/Context/ProductsContext";
import ProductPage from "./component/pages/shopPage/ProductPage";
import CheckOut from "./component/CheckOut";
import Cart from "./component/Cart";

const router = createBrowserRouter([
  {
    path: "/CeramicShop/",
    element: <HomePage />,
  },
  {
    path: "/CeramicShop/about",
    element: <AboutPage />,
  },
  {
    path: "/CeramicShop/shop",
    element: <ShopPage />,
  },
  {
    path: "/CeramicShop/contact",
    element: <ContactPage />,
  },
  { path: "/CeramicShop/shop/product/:ProductId", element: <ProductPage /> },
  { path: "/CeramicShop/cart", element: <Cart /> },
  { path: "/CeramicShop/checkout", element: <CheckOut /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </StrictMode>
);
