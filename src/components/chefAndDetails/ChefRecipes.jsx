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
      <div className="py-2 h-full xl:h-[57rem] lg:h-[65rem] shadow-lg border-2 border-[#204d20] ">
        <h1 className="text-2xl pb-4 text-center font-bold">{recipe_name}</h1>
        <div className="flex flex-col items-center">
          <div className="">
            <img
              src={recipe_image}
              className="w-[30rem] h-[20rem] rounded-lg mb-6 lg:mb-0 lg:mr-6"
            />
          </div>
          <div className="px-3">
            <p className="text-lg py-6">
              <strong>Ingredients:</strong> {ingredients}.
            </p>
            <p className="text-lg py-3">
              <strong>Method:</strong> {method}.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-around px-2">
        <div className="flex mr-2 items-center py-8">
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
            className="transition duration-300 border-2 border-[#10B981] hover:bg-transparent hover:text-gray-600 rounded py-3 px-4 bg-success text-white flex items-center"
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