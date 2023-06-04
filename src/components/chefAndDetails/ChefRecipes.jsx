import React, { useState } from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";

const ChefRecipes = ({ recipe }) => {
  const { recipe_name, ingredients, method, recipe_rating, recipe_image } =
    recipe;

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(true);
    toast.success(`${recipe_name} is now your favorite recipe!`);
  };

  const rating = Math.round(recipe_rating);

  return (
    <div className="px-2 py-4">
      <div className="py-2 shadow-lg border-2 border-[#204d20] md:h-[67rem] xl:h-[60rem] ">
        <h1 className="text-2xl pb-4 text-center font-bold">{recipe_name}</h1>
        <div className="flex flex-col items-center ">
          <div className="flex justify-center">
            <img
              src={recipe_image}
              className="w-full md:w-[30rem] h-[20rem] object-cover rounded-lg mb-6 lg:mb-0 "
            />
          </div>
          <div className="px-3 flex-grow">
            <p className="text-lg py-5">
              <strong>Ingredients:</strong> {ingredients}.
            </p>
            <p className="text-lg">
              <strong>Method:</strong> {method}.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around px-2">
        <div className="flex mr-2 items-center py-10">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                className={clsx(
                  "h-5 w-5",
                  index < rating ? "text-yellow-400" : "text-gray-300"
                )}
              />
            ))}
            <span className="font-semibold ml-3 text-slate-400">{recipe_rating}</span>
          </div>
          <button
            className="btn border-0 inline-flex items-center justify-center h-10 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 disabled:cursor-not-allowed disabled:borde"
            disabled={favorite}
            onClick={handleFavorite}
          >
            {favorite ? "Favorite" : "Add to favorites"}
            <HeartIcon className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChefRecipes;