import React from "react";
import Header from "../../Header";
import Hero from "./Hero";
import About from "./About";
import ProductsCategory from "./ProductsCategory";
import PopularProducts from "./PopularProducts";
import Add from "./Add";
import Trending from "./Trending";
import Testimonial from "./Testimonial";
import Footer from "../../Footer";

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <ProductsCategory />
      <PopularProducts />
      <Add />
      <Trending />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
