import React from "react";
import Header from "../../Header";
import Hero from "./Hero";
import GetInTouch from "./GetInTouch";
import FAQs from "./FAQs";
import Footer from "../../Footer";
function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <GetInTouch />
      <FAQs />
      <Footer />
    </div>
  );
}

export default ContactPage;
