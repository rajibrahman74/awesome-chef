import React from "react";
import HeroSection from "./HeroSection";
import ChefContainer from "./chefAndDetails/ChefContainer";
import RelatedRecipes from "./Featureds/RelatedRecipes";
import Services from "./Featureds/Services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ChefContainer />
      <RelatedRecipes />
      <Services />
    </div>
  );
};

export default Home;
