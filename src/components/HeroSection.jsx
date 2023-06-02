import React from "react";
import { Button } from "./Button.jsx";
import heroImage from "../../public/images/heroImage.png";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";

// Framer-motion
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="max-w-[100rem] mx-auto py-[10rem] flex flex-col-reverse md:flex-row justify-center items-center gap-[70px] px-4">
      <motion.div 
      variants={{
        hidden: {opacity:0, x:120},
        visible:{opacity: 1, x:0},
      }}
      initial="hidden"
      animate="visible"
      transation={{ duration:0.5, delay:0.25 }}
      className="flex flex-col gap-[30px] md:w-1/2 md:pl-[30px] xs:text-center">
        <h1 className="text-[#1A1919] text-6xl md:text-8xl  m-0 font-bold">
         Master & Executive Korean Chef
        </h1>
        <p className="text-[#757575] text-[17px] m-0 pt-5">
          A Korean chef is a skilled culinary professional who specializes in
          the preparation and presentation of traditional Korean cuisine. Korean
          cuisine is known for its bold flavors, unique ingredients, and
          emphasis on healthy, fresh ingredients.
        </p>
        <span>
         <Button text="Contact Now"/> 
        </span>
      </motion.div>
      <motion.div 
        variants={{
          hidden: {opacity:0, x:0},
          visible:{opacity: 1, x:120},
        }}
        initial="hidden"
        animate="visible"
        transation={{ duration:0.5, delay:0.25 }}

      className="w-full md:w-1/2 flex justify-center items-center">
        <img className="max-w-full" src={heroImage} alt="" />
      </motion.div>
    </section>
  );
};

export default HeroSection;