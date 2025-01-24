import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { ProductsContext } from "../../Context/ProductsContext";

function Trending() {
  const [products, setProducts] = useState([
    {
      id: 1,
      mainImage: "./shop/ceramic-cup-01-300x300.jpg",
      name: "Ceramic Cup",
      priceAfterSale: 189.0,
      priceBeforeSale: 237.0,
    },
    {
      id: 2,
      mainImage: "./shop/product-09-300x300.jpg",
      name: "Ceramic Bottles",
      priceAfterSale: 249.0,
      priceBeforeSale: 299.0,
    },
    {
      id: 3,
      mainImage: "./shop/product-03-300x300.jpg",
      name: "Ceramic Drink Coasters",
      priceAfterSale: 99.0,
      priceBeforeSale: 157.0,
    },
  ]);
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className="w-[70%] mx-auto md:w-full py-[10rem] md:text-center">
      <h4 className="uppercase text-main mb-5">Trending Now</h4>
      <h1 className="text-main leading-snug text-5xl md:text-4xl font-bold">
        Minimalist Ceramic Designs
      </h1>

      <div className="container mx-auto flex flex-wrap justify-center gap-5 items-center mt-10 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[400px] h-[570px] md:w-[150px] md:h-[300px] relative "
          >
            <img src={product.mainImage} alt="" className="w-full" />
            <p className="absolute top-5 left-5 md:left-2 bg-white px-3 rounded-full">
              sale!
            </p>
            <button
              className="bg-white p-2 rounded-full top-5 text-main right-5 md:right-2 absolute"
              onClick={() => {
                addToCart(product);
              }}
            >
              <FaShoppingCart />
            </button>
            <div className="pt-5 ">
              <h6 className="text-[#A4A8A7] pb-2">Ceramic</h6>
              <Link
                to={`/CeramicShop/shop/product/${product.id}`}
                className="text-2xl md:text-lg text-main"
              >
                {product.name}
              </Link>
              <div className="pt-3 font-bold flex gap-2 text-xl">
                <span className="text-[#A4A8A7] line-through">
                  ${product.priceBeforeSale}.00
                </span>
                <span>${product.priceAfterSale}.00</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
