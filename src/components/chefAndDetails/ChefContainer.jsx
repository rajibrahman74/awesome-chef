import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "./chef";

const ChefContainer = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div className="mx-auto text-center -mt-8">
      <h3 className="text-3xl font-bold mb-2 pt-8">Our Master Chefs</h3>
      <p className="text-lg text-gray-600 mb-8">
        Experience the authentic flavors of Thailand with our culinary experts
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12  w-4/5 mx-auto">
        {chefs.map((chef) => (
          <div className="" key={chef.id}>
            <Chef chef={chef}></Chef>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefContainer;