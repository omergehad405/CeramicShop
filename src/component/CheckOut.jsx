import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProductsContext } from "./Context/ProductsContext";
import { Link } from "react-router";

function CheckOut() {
  const { cart } = useContext(ProductsContext);
  const totalPrice = cart.reduce(
    (total, item) => total + item.priceAfterSale * item.quantity,
    0
  );
  const [showCoupon, setshowCoupon] = useState(false);
  const [error, setError] = useState(false);
  const [emptyInputs, setEmptyInputs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const emptyInputNames = [];

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name && inputs[i].value.trim() === "") {
        emptyInputNames.push(inputs[i].name);
      }
    }

    if (emptyInputNames.length > 0) {
      setError(true);
      setEmptyInputs(emptyInputNames);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setError(false);
      console.log("Submitted successfully!");
    }
  };

  return (
    <>
      <Header />
      <div className="container my-20">
        <h1 className={"w-[70%] md:w-[90%] mx-auto pb-5 text-4xl text-main"}>
          Checkout
        </h1>

        <div
          className={`${
            error === false ? "hidden" : "block"
          } w-[70%] md:w-[90%] mx-auto  bg-[#F1F4F1] border-t-4 border-[#ff0000] p-3`}
        >
          {emptyInputs.length > 0 && (
            <div className="text-main font-bold capitalize flex flex-col gap-2 ">
              {emptyInputs.map((name, index) => (
                <p key={index} className="text-second">
                  {index > 0}
                  {name}
                  <span className="ml-2 text-second font-normal">
                    {" "}
                    is a required field.
                  </span>
                </p>
              ))}
            </div>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="w-[70%] md:w-[90%] mx-auto">
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
          <div className="w-[70%] md:w-[90%] mx-auto flex md:flex-col-reverse justify-center gap-5 mt-5">
            <div className="grow md:mt-10">
              <h1 className="border-b font-bold pb-3 text-main text-xl w-fit ">
                Customer information
              </h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="my-5 border rounded-md py-3 px-2 w-full"
                  name="email address"
                />

                <h1 className="border-b  pb-3 text-main text-xl w-fit">
                  Billing details
                </h1>

                <div className="flex mt-10 items-center justify-center gap-5">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className=" border rounded-md py-3 px-2 w-full"
                    name="firstName"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className=" border rounded-md py-3 px-2 w-full"
                    name="lastName"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Company Name (optional)"
                  className="my-5 border rounded-md py-3 px-2 w-full"
                />

                <select
                  name="country"
                  className=" border rounded-md py-3 px-2 w-full text-gray-500"
                >
                  <option value="us">United State</option>
                  <option value="eg">Egypt</option>
                  <option value="sa">Saudi Arabia</option>
                </select>

                <div className="flex items-center justify-center gap-5">
                  <input
                    type="text"
                    placeholder="House number and Street Name *"
                    className="my-5 border rounded-md py-3 px-2 w-full"
                    name="house_number"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit. (optional) *"
                    className="my-5 border rounded-md py-3 px-2 w-full"
                  />
                </div>

                <div className="flex  items-center justify-center gap-5">
                  <input
                    type="text"
                    placeholder="Town / City *"
                    className=" border rounded-md py-3 px-2 w-full"
                    name="town"
                  />
                  <select
                    name="state"
                    className="border rounded-md py-3 px-2 w-full text-gray-500"
                  >
                    <option value="us">California</option>
                    <option value="eg">Cairo</option>
                    <option value="sa">riyadh</option>
                  </select>
                  <input
                    type="text"
                    placeholder="ZIP Code *"
                    className=" border rounded-md py-3 px-2 w-full"
                    name="zipCode"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Phone *"
                  className="my-5 border rounded-md py-3 px-2 w-full"
                  name="phone"
                />

                <h1 className="border-b font-bold my-5  pb-3 text-main text-xl w-fit">
                  Additional information
                </h1>

                <textarea
                  className=" border rounded-md py-3 px-2 w-full"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>

                <div>
                  {showCoupon === false ? (
                    <button
                      className="text-second mt-5"
                      onClick={() => {
                        setshowCoupon(!showCoupon);
                      }}
                    >
                      Have a coupon?
                    </button>
                  ) : (
                    <div className="flex flex-wrap items-center gap-5 md:gap-1">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="my-5 md:mt-5 border grow p-4 "
                      />

                      <button className="uppercase py-4 px-20 md:px-10 text-white transition duration-500 font-bold bg-main border-2 hover:text-main hover:bg-white hover:border-main">
                        Apply
                      </button>
                    </div>
                  )}
                </div>

                <h1 className="font-bold my-5 pb-3 text-main text-xl w-fit">
                  Payment
                </h1>

                <div className="bg-[#eee] border-t-4 border-main p-3">
                  <p className="text-second">
                    Sorry, it seems that there are no available payment methods.
                    Please contact us if you require assistance or wish to make
                    alternate arrangements.
                  </p>
                </div>

                <button className="w-full mt-10 uppercase py-5 px-20 text-white transition duration-500 font-bold bg-main border-2 hover:text-main hover:bg-white hover:border-main">
                  place order ${totalPrice}.00
                </button>
              </form>
            </div>
            <div className="w-[750px] md:w-full">
              <h1 className="font-bold pb-3 text-main text-xl w-fit">
                Your order
              </h1>

              <div className="border  rounded-lg">
                <div className="flex justify-between items-center p-5">
                  <h4 className="text-gray-500 font-bold">Product</h4>
                  <h4 className="text-gray-500 font-bold">Subtotal</h4>
                </div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="wfull border-t flex justify-between items-center px-5 py-5"
                  >
                    <div className="flex justify-between items-center gap-2">
                      <img
                        src={item.mainImage}
                        alt=""
                        className="w-[50px] rounded-md"
                      />
                      <h1 className="text-second  capitalize">
                        {item.name} x {item.quantity}
                      </h1>
                    </div>
                    <span className="text-second">
                      ${item.priceAfterSale}.00
                    </span>
                  </div>
                ))}
                <div className="wfull border-t flex justify-between items-center px-5 py-5">
                  <h4 className="text-gray-500 text-lg">Subtotal</h4>
                  <span className="text-lg text-second">${totalPrice}.00</span>
                </div>
                <div className="wfull border-t flex justify-between items-center px-5 py-5">
                  <h4 className="text-gray-500 font-bold text-xl">Total</h4>
                  <span className="font-bold text-xl text-second">
                    ${totalPrice}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
