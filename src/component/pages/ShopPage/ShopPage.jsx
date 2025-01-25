import React, { useContext, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { ProductsContext } from "../../Context/ProductsContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

function ShopPage() {
  const { products, addToCart } = useContext(ProductsContext);
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Ceramic Bottles",
  //     mainImage: "./shop/product-09-300x300.jpg",
  //     priceAfterSale: 249.0,
  //   },
  //   {
  //     id: 2,
  //     name: "Ceramic Cup",
  //     mainImage: "./shop/ceramic-cup-01-300x300.jpg",
  //     priceAfterSale: 189.0,
  //     priceBeforeSale: 237.0,
  //   },
  //   {
  //     id: 3,
  //     name: "Ceramic Drink Coasters",
  //     mainImage: "./shop/product-03-300x300.jpg",

  //     priceAfterSale: 99.0,
  //     priceBeforeSale: 157.0,
  //   },
  //   {
  //     id: 4,
  //     name: "Ceramic Garden Pots",
  //     mainImage: "./shop/product-08-300x300.jpg",

  //     priceAfterSale: 159.0,
  //     priceBeforeSale: 179.0,
  //   },
  //   {
  //     id: 5,
  //     name: "Ceramic Pastel Plates",
  //     mainImage: "./shop/product-06-300x300.jpg",

  //     priceAfterSale: 209.0,
  //     priceBeforeSale: 239.0,
  //   },
  //   {
  //     id: 6,
  //     name: "Ceramic Plant Pots",
  //     mainImage: "./shop/product-05-300x300.jpg",

  //     priceAfterSale: 139.0,
  //   },
  //   {
  //     id: 7,
  //     name: "Ceramic Planter",
  //     mainImage: "./shop/ceramic-planter-01-300x300.jpg",

  //     priceAfterSale: 299.0,
  //     priceBeforeSale: 349.0,
  //   },
  //   {
  //     id: 8,
  //     name: "Ceramic Plate",
  //     mainImage: "./shop/product-01-300x300.jpg",

  //     priceAfterSale: 119.0,
  //     priceBeforeSale: 179.0,
  //   },
  //   {
  //     id: 9,
  //     name: "Ceramic Plates and Bowls",
  //     mainImage: "./shop/product-02-300x300.jpg",

  //     priceAfterSale: 209.0,
  //     priceBeforeSale: 249.0,
  //   },
  //   {
  //     id: 10,
  //     name: "Ceramic Plates and Spoons",
  //     mainImage: "./shop/product-07-300x300.jpg",

  //     priceAfterSale: 299.0,
  //     priceBeforeSale: 349.0,
  //   },
  //   {
  //     id: 11,
  //     name: "Ceramic Vases and Planters",
  //     mainImage: "./shop/product-02-300x300.jpg",

  //     priceAfterSale: 217.0,
  //     priceBeforeSale: 247.0,
  //   },
  // ]);

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
                  to={`/CeramicShop/shop/product/${product.id}`}
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
