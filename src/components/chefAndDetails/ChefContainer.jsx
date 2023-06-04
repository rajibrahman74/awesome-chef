import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "./chef";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ChefContainer = () => {

  // Framer motion
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  const cardVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

// Fatch Data
  const chefs = useLoaderData();
  console.log(chefs);

  return (
    <section className="flex flex-col text-center justify-center items-center mt-8 px-2">
      <h3 className="text-5xl font-bold mb-1 pt-8">Our Master Chefs</h3>
      <hr className="h-1 w-[12rem] md:w-[24rem] " />
      <p className="text-lg text-gray-600 mt-3 mb-8">
        Experience the authentic flavors of Thailand with our culinary experts
      </p>
      <div ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto`}
      >
        {chefs.map((chef) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            key={chef.id}>
            <Chef chef={chef}></Chef>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChefContainer;