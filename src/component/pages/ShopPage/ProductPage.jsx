import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { ProductsContext } from "../../Context/ProductsContext";
import Header from "../../Header";
import Footer from "../../Footer";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ProductId } = useParams();
  const { products, addToCart } = useContext(ProductsContext);

  const [randomProducts, setRandomProducts] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setRandomProducts(shuffled.slice(0, 3));
  }, [products, location]);

  const [section, setSection] = useState("description");
  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    email: "",
    isSaved: false,
  });
  const product = products.find((item) => item.id === parseInt(ProductId));
  const [quantity, setQuantity] = useState(1);

  const [mainImage, setMainImage] = useState(product.mainImage);

  useEffect(() => {
    setMainImage(product.mainImage);
  }, [product.mainImage]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review || !newReview.email) {
      alert("All fields are required!");
      return;
    }
    setReviews([...reviews, newReview]);
    setNewReview({
      name: "",
      review: "",
      email: "",
      isSaved: false,
    });
  };
  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    product.quantity = newQuantity;
  };
  const decrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      product.quantity = newQuantity;
    }
  };

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-wrap-reverse items-center justify-center gap-10 p-4 mt-10 mb-20">
        <div className="flex flex-wrap gap-10 ">
          <div className="flex flex-wrap flex-col md:flex-row gap-2 sm:justify-center">
            {product.subImages.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img}
                  alt="Sub Image"
                  className={`border w-[150px] h-[150px] mb-5 cursor-pointer ${
                    mainImage === img ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              );
            })}
          </div>
          <div className="w-[500px]">
            <img
              src={mainImage === product.mainImage ? `../.${mainImage}` : mainImage}
              alt="Main Image"
              className="border w-full object-contain md:w-[350px]"
            />
          </div>
        </div>

        <div className="">
          <h1 className="text-main text-4xl capitalize pb-5">{product.name}</h1>
          {product.priceBeforeSale ? (
            <p className="text-gray-500 ">
              <span className="text-3xl line-through pr-2">
                ${product.priceBeforeSale}.00{" "}
              </span>
              <span className="text-3xl text-second font-bold">
                ${product.priceAfterSale}.00{" "}
              </span>
              & Free Shipping
            </p>
          ) : (
            <p>
              <span>${product.priceAfterSale}.00 </span>& Free Shipping
            </p>
          )}
          <p className="w-[600px] md:w-full text-gray-500 pt-2 pb-3">
            Discover the beauty of ceramics with our handcrafted. This exquisite
            piece combines artistry and function, making it a versatile addition
            to any space. Whether used as a decorative accent or a practical
            item, this ceramic creation adds a touch of elegance to your
            surroundings.
          </p>

          <div className="flex items-center flex-wrap gap-5 mb-5 sm:justify-center">
            <div className="flex items-center">
              <button
                className="border py-2 px-5 text-gray-500"
                onClick={decrement}
              >
                -
              </button>
              <span className="border py-2 px-5 text-gray-500">{quantity}</span>
              <button
                onClick={increment}
                className="border py-2 px-5 text-gray-500"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addToCart(product);
              }}
              className="uppercase py-2 px-10 text-white transition duration-500 font-bold bg-main border-2  hover:text-main hover:bg-white hover:border-main"
            >
              Add To Cart
            </button>
          </div>
          <hr />

          <p className="mt-5 mb-2 text-second font-bold text-xl">
            Free shipping on orders over $50!
          </p>

          <ul className="">
            <li className="flex gap-5 items-center">
              <FaCheckCircle className="text-second" />{" "}
              <span className="text-gray-500">
                No-Risk Money Back Guarantee!
              </span>
            </li>
            <li className="flex gap-5 items-center">
              <FaCheckCircle className="text-second" />{" "}
              <span className="text-gray-500">No Hassle Refunds</span>
            </li>
            <li className="flex gap-5 items-center">
              <FaCheckCircle className="text-second" />{" "}
              <span className="text-gray-500">Secure Payments</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[70%] md:w-[90%] mx-auto border-t-2 pt-2">
        <div className="flex gap-5 items-center mb-10">
          <button
            onClick={() => setSection("description")}
            className={`${
              section === "description" ? " after:bg-black" : ""
            } text-second font-bold text-xl relative after:content-[''] after:absolute after:w-full after:h-[2px] after:left-0 after:top-[-10px]`}
          >
            Description
          </button>
          <button
            onClick={() => setSection("reviews")}
            className={`${
              section === "reviews" ? " after:bg-black" : ""
            } text-second font-bold text-xl relative after:content-[''] after:absolute after:w-full after:h-[2px] after:left-0 after:top-[-10px]`}
          >
            Reviews ({reviews.length})
          </button>
        </div>

        {section === "description" ? (
          <div>
            <p className="text-gray-500 text-xl leading-normal md:text-base">
              Discover the beauty of ceramics with our handcrafted. This
              exquisite piece combines artistry and function, making it a
              versatile addition to any space. Whether used as a decorative
              accent or a practical item, this ceramic creation adds a touch of
              elegance to your surroundings. Showcases the craftsmanship and
              timeless appeal of ceramics. Its ensures it’s built to last,
              serving both as a beautiful addition and a functional part of your
              daily life. Experience the artistry of ceramics and enhance your
              living spaces with our. Order today and elevate your surroundings
              with this exquisite piece.
            </p>
          </div>
        ) : (
          <div>
            <div>
              {reviews.length === 0 ? (
                <p>There are no reviews yet.</p>
              ) : (
                reviews.map((review, idx) => (
                  <div key={idx} className="mb-10 flex items-center gap-5">
                    <img
                      src="./shop/user.png"
                      alt=""
                      className="rounded-full border w-[50px] h-[50px]"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-second text-3xl capitalize">
                          {review.name}
                        </h1>
                        <span className="text-gray-500 text-sm pt-3">
                          {formattedDate}
                        </span>
                      </div>
                      <p className="text-gray-500 leading-8 w-[650px] pl-3">
                        {review.review}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-5 border">
              <h1 className="text-second font-bold text-2xl pb-2">
                Be the first to review “{product.name}”
              </h1>

              <p className="text-gray-500">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form onSubmit={handleFormSubmit} className="mt-10">
                <label
                  htmlFor="review"
                  className="text-second font-bold flex flex-col mb-5 "
                >
                  Your review *
                  <textarea
                    className="w-full border focus:outline-none p-2 "
                    name=""
                    id="review"
                    rows="5"
                    value={newReview.review}
                    onChange={(e) => {
                      setNewReview({ ...newReview, review: e.target.value });
                    }}
                  ></textarea>
                </label>

                <div className="flex flex-wrap gap-5 justify-center">
                  <div className="flex flex-col w-[49%] md:w-full">
                    <label htmlFor="" className="text-gray-500 capitalize ">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="py-3 border focus:outline-none px-3 "
                      id="name"
                      value={newReview.name}
                      onChange={(e) => {
                        setNewReview({ ...newReview, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-[49%] md:w-full">
                    <label
                      htmlFor="email"
                      className="text-gray-500 capitalize "
                    >
                      email *
                    </label>
                    <input
                      type="email"
                      className="py-3 border focus:outline-none px-3"
                      id="email"
                      value={newReview.email}
                      onChange={(e) => {
                        setNewReview({ ...newReview, email: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <div className="flex  gap-2 mt-5">
                  <input
                    type="checkBox"
                    id="check"
                    checked={newReview.isSaved}
                    onChange={(e) => {
                      setNewReview({ ...newReview, isSaved: e.target.checked });
                    }}
                  />
                  <label htmlFor="check" className="text-gray-500 md:text-sm">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <button className="mt-5 uppercase py-2 px-10 text-white transition duration-500 font-bold bg-main border-2  hover:text-main hover:bg-white hover:border-main">
                  submit
                </button>
              </form>
            </div>
          </div>
        )}

        <h1 className="text-main text-5xl mt-20">Related products</h1>

        <div className="container mx-auto flex flex-wrap justify-center gap-5 items-center mt-10 ">
          {randomProducts.map((product) => (
            <div
              key={product.id}
              className="w-[400px] h-[570px] md:w-[150px] md:h-[300px] relative "
            >
              <img src={`../.${product.mainImage}`} alt="" className="w-full" />
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
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
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
      <Footer />
    </>
  );
}

export default ProductPage;
