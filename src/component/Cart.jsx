import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProductsContext } from "./Context/ProductsContext";
import { Link } from "react-router";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const { cart, removeProduct, increaseQuantity, decreaseQuantity } =
    useContext(ProductsContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.priceAfterSale * item.quantity,
    0
  );
  return (
    <>
      <Header />
      <div className="container my-20">
        <h1 className="w-[70%] md:w-[90%] mx-auto pb-5 text-4xl text-main">
          Cart
        </h1>

        {cart.length === 0 ? (
          <div className="w-[70%] mx-auto ">
            <div className="bg-[#eee] p-5 relative after:bg-main after:top-0 after:left-0 after:w-full after:h-1 after:content-[''] after:absolute">
              <p className="text-second">Your cart is currently empty.</p>
            </div>

            <button className="mt-10">
              <Link
                to="/CeramicShop/shop"
                className=" hover:text-white hover:bg-main transtition-text duration-500 text-center py-3 text-main border border-main my-2 font-bold uppercase tracking-widest px-10"
              >
                Back To shop
              </Link>
            </button>
          </div>
        ) : (
          <div className="w-[70%] md:w-[90%] mx-auto flex flex-wrap justify-center gap-5 mt-5">
            <div className="grow md:hidden">
              <div className="bg-[#F1F4F1] flex justify-evenly items-center text-center">
                <span
                  className="w-[150px] max-w-full py-5 text-lg text-second"
                  colSpan={2}
                ></span>
                <span className="w-[150px] max-w-full py-5 text-lg text-second">
                  Product
                </span>
                <span className="w-[150px] max-w-full py-5 text-lg text-second">
                  Price
                </span>
                <span className="w-[150px] max-w-full py-5 text-lg text-second">
                  Quantity
                </span>
                <span className="w-[150px] max-w-full py-5 text-lg text-second">
                  Total
                </span>
              </div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap justify-evenly items-center text-center py-1"
                >
                  <div className="w-[150px] max-w-full flex justify-evenly items-center gap-5">
                    <button
                      className="hover:text-red-500 transition-text duration-300"
                      onClick={() => removeProduct(item.id)}
                    >
                      <FaTrash />
                    </button>
                    <img src={item.mainImage} alt="" className="w-[75px]" />
                  </div>
                  <div className="w-[150px] max-w-full">
                    <h1 className="text-main font-bold">{item.name}</h1>
                  </div>
                  <div className="w-[150px] max-w-full">
                    <span className="text-second text-lg">
                      ${item.priceAfterSale}.00
                    </span>
                  </div>
                  <div className="w-[150px] max-w-full">
                    <div className="">
                      <button
                        className="border py-1 px-3 text-gray-500"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="border py-2 px-3 text-gray-500">
                        {item.quantity}
                      </span>
                      <button
                        className="border py-1 px-3 text-gray-500"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-[150px] max-w-full">
                    <span className="text-second font-bold block">
                      ${item.priceAfterSale * item.quantity}.00
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grow md:block hidden">
              {cart.map((item) => (
                <div key={item.id} className="w-full mx-auto text-center py-1">
                  <div className="text-right border p-3">
                    <button
                      className="hover:text-red-500 transition-text duration-300"
                      onClick={() => removeProduct(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <div className="text-center border flex items-center justify-center py-5">
                    <img src={item.mainImage} alt="" className="w-[75px]" />
                  </div>
                  <div className="border py-5 flex items-center justify-between px-5">
                    <span className="text-second font-bold">Product</span>
                    <h1 className="text-main font-bold">{item.name}</h1>
                  </div>
                  <div className="border py-5 flex items-center justify-between px-5">
                    <span className="text-second font-bold">Price</span>
                    <span className="text-second text-lg">
                      ${item.priceAfterSale}.00
                    </span>
                  </div>
                  <div className="border py-5 flex items-center justify-between px-5">
                    <span className="text-second font-bold">Quantity</span>
                    <div className="flex justify-between items-center">
                      <button
                        className="border py-1 px-3 text-gray-500"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="border py-1 px-3 text-gray-500">
                        {item.quantity}
                      </span>
                      <button
                        className="border py-1 px-3 text-gray-500"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="border py-5 flex items-center justify-between px-5">
                    <span className="text-second font-bold">Subtotal</span>
                    <span className="text-second font-bold block">
                      ${item.priceAfterSale * item.quantity}.00
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[400px] md:w-full border h-[350px] relative">
              <h1 className="bg-[#F1F4F1] px-5 py-3 text-main font-bold text-2xl">
                Cart totals
              </h1>
              <div className="p-5">
                <div className="mt-5">
                  <div className="mb-5 border-b pb-3 w-[350px] max-w-full mx-auto">
                    <div className="w-[200px] justify-between flex gap-20 items-center">
                      <p className="text-second text-lg">Subtotal</p>
                      <span className="text-second">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-5 border-b pb-3 w-[350px] max-w-full mx-auto">
                    <div className="w-[200px] justify-between flex gap-20 items-center">
                      <p className="text-second text-lg">Total</p>
                      <span className="text-second">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-[350px] max-w-full mx-auto absolute bottom-10 left-[50%] transform -translate-x-1/2">
                  <Link
                    to="/CeramicShop/checkout"
                    className=" hover:text-white hover:bg-main transtition-text duration-500 text-center py-5 text-main border border-main my-2 font-bold uppercase tracking-widest px-5"
                  >
                    proceed to checkout
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
