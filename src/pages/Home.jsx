import React from "react";
import HeroSection from "../components/HeroSection";
import ChefContainer from "../components/chefAndDetails/ChefContainer";
import RelatedRecipes from "../components/Featureds/RelatedRecipes";
import Services from "../components/Featureds/Services";
import Testimonial from "../components/Testimonial";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ChefContainer />
      <RelatedRecipes />
     <Testimonial/>
      <Services />
      <Contact/>
    </div>
  );
};

export default Home;
