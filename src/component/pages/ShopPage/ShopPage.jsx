import React, { useContext } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { ProductsContext } from "../../Context/ProductsContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

function ShopPage() {
  const { products, addToCart } = useContext(ProductsContext);

  return (
    <>
      <Header />
      <div className="container my-20">
        <h1 className="w-[70%] mx-auto pb-5 text-5xl text-main">Shop</h1>
        <hr className="w-[70%] mx-auto mb-10" />

        <div className="w-[70%] mx-auto flex flex-wrap justify-center gap-5 items-center mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[400px] h-[500px] lg:w-[300px] lg:h-[400px] relative my-5"
            >
              <img src={product.mainImage} alt="" className="w-full" />
              <p className="absolute top-5 left-5 bg-white px-3 rounded-full">
                Sale!
              </p>
              <button
                className="bg-white p-2 rounded-full top-5 text-main right-5 absolute"
                onClick={() => {
                  addToCart(product);
                }}
              >
                <FaShoppingCart />
              </button>
              <div className="pt-5">
                <h6 className="text-[#A4A8A7] pb-2">Ceramic</h6>
                <Link
                  to={`/shop/product/${product.id}`}
                  className="text-2xl text-main"
                >
                  {product.name}
                </Link>
                <div className="pt-3 font-bold flex gap-2 text-xl">
                  <span className="text-[#A4A8A7] line-through">
                    {product.priceBeforeSale
                      ? `$${product.priceBeforeSale}.00`
                      : ""}
                  </span>
                  <span>${product.priceAfterSale}.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShopPage;
