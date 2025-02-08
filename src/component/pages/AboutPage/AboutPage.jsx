import React, { useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Hero from "./Hero";
import Ourstory from "./Ourstory";
import OurJourney from "./OurJourney";
import AimingTo from "./AimingTo";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Ourstory />
      <OurJourney />
      <AimingTo />
      <Footer />
    </div>
  );
}

export default AboutPage;
