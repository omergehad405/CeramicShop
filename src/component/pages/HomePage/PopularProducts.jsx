import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { ProductsContext } from "../../Context/ProductsContext";
function PopularProducts() {
  const [products, setProducts] = useState([
    {
      productId: 1,
      ProductImg: "./shop/ceramic-cup-01-300x300.jpg",
      productTitle: "Ceramic Cup",
      productAfterSale: 189.0,
      productBeforeSale: 237.0,
    },
    {
      productId: 2,
      ProductImg: "./shop/ceramic-planter-01-300x300.jpg",
      productTitle: "Ceramic Planter",
      productAfterSale: 299.0,
      productBeforeSale: 349.0,
    },
    {
      productId: 3,
      ProductImg: "./shop/product-01-300x300.jpg",
      productTitle: "Ceramic Plates",
      productAfterSale: 119.0,
      productBeforeSale: 179.0,
    },
    {
      productId: 4,
      ProductImg: "./shop/product-02-300x300.jpg",
      productTitle: "Ceramic Plates and Bowls",
      productAfterSale: 209.0,
      productBeforeSale: 249.0,
    },
    {
      productId: 5,
      ProductImg: "./shop/product-07-300x300.jpg",
      productTitle: "Ceramic Plates and Spoons",
      productAfterSale: 299.0,
      productBeforeSale: 349.0,
    },
    {
      productId: 6,
      ProductImg: "./shop/contact-01-300x300.jpg",
      productTitle: "Ceramic Vases and Planters",
      productAfterSale: 217.0,
      productBeforeSale: 347.0,
    },
  ]);
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className="w-[70%] mx-auto md:w-full py-[10rem] md:text-center">
      <h4 className="uppercase text-main mb-5">Most Popular</h4>
      <h1 className="text-main leading-snug text-5xl md:text-4xl font-bold">
        Discover the Latest Additions at Your Top <br /> Choice Flower Shop
      </h1>

      <div className="container mx-auto flex flex-wrap justify-center gap-5 items-center mt-10 ">
        {products.map((product) => (
          <div
            key={product.productId}
            className="w-[400px] h-[570px] relative "
          >
            <img src={product.ProductImg} alt="" className="w-full" />
            <p className="absolute top-5 left-5 bg-white px-3 rounded-full">
              sale!
            </p>
            <button
              className="bg-white p-2 rounded-full top-5 text-main right-5 absolute"
              onClick={() => {
                addToCart(product);
              }}
            >
              <FaShoppingCart />
            </button>
            <div className="pt-5 ">
              <h6 className="text-[#A4A8A7] pb-2">Ceramic</h6>
              <Link
                to={`/CeramicShop/shop/product/${product.productId}`}
                className="text-2xl text-main"
              >
                {product.productTitle}
              </Link>
              <div className="pt-3 font-bold flex gap-2 text-xl">
                <span className="text-[#A4A8A7] line-through">
                  ${product.productBeforeSale}.00
                </span>
                <span>${product.productAfterSale}.00</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
