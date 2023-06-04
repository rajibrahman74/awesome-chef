import React from "react";
import { Button } from "./Button.jsx";
import heroImage from "../../public/images/heroImage.png";
import { Link, NavLink } from "react-router-dom";

// Framer-motion
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="max-w-[93rem] mx-auto py-[10rem] flex flex-col-reverse md:flex-row justify-center items-center gap-[70px] lg:px-4 overflow-hidden">
      <div className="flex flex-col gap-[30px] md:w-1/2 md:pl-[30px] xs:text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#1A1919] text-6xl lg:text-7xl m-0 font-bold"
        >
          Master & Executive Korean Chef
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#757575] text-[17px] m-0 pt-5 pl-1"
        >
          A Korean chef is a skilled culinary professional who specializes in
          the preparation and presentation of traditional Korean cuisine. Korean
          cuisine is known for its bold flavors, unique ingredients, and
          emphasis on healthy, fresh ingredients.
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link to="/contact">
          <Button text="Contact Now" />
          </Link>
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <img className="max-w-full" src={heroImage} alt="" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
