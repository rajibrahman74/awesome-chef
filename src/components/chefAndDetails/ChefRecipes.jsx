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
    <div className="max-w-7xl mx-auto px-4">
      <div className="px-8 py-4 my-20 h-full shadow-lg">
        <h1 className="text-2xl text-center font-bold">{recipe_name}</h1>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-[50%]">
            <img
              src={recipe_image}
              className="w-full h-full lg:max-w-sm rounded-lg mb-6 lg:mb-0 lg:mr-6"
            />
          </div>
          <div className="w-[50%]">
            <p className="py-6 text-lg">
              <strong>Ingredients:</strong> {ingredients}.
            </p>
            <p className="py-6 text-lg">
              <strong>Method:</strong> {method}.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <button
            className="btn bg-success border-0 text-white flex items-center"
            disabled={favorite}
            onClick={handleFavorite}
          >
            {favorite ? "Favorite" : "Add to favorites"}
            <HeartIcon className="w-5 h-5 ml-1" />
          </button>

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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChefRecipes;