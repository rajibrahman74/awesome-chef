import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import ChefRecipes from "./ChefRecipes";
import Recepies from "../../../public/icons/recepies.png";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  const chef = useLoaderData();
  const {
    id,
    picture,
    bio,
    name,
    years_experience,
    num_recipes,
    likes,
    recipes,
  } = chef;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="h-[70vh] mt-[30px]">
        <div className="px-4 py-8 lg:px-16 lg:py-12">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <LazyLoad>
                <img
                  src={picture}
                  className="w-full h-full rounded-md shadow-lg"
                  alt={name}
                />
              </LazyLoad>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold">{name}</h2>
                <p className="text-lg py-4">{bio}</p>
                <div className="flex items-center justify-start gap-12 py-2">
                  <span className="flex items-center text-md gap">
                    <CalendarDaysIcon className="w-6 h-6 text-gray-500 mr-2" />
                    {years_experience} Years of experiences
                  </span>
                  <span className="flex items-center">
                    <HandThumbUpIcon className="w-6 h-6 text-gray-500 mr-2" />
                    {likes}
                  </span>
                  <span className="flex items-center">
                    <img className="w-6 h-6 mr-2" src={Recepies} alt="" />
                    {num_recipes} of recipes.
                  </span>
                </div>
              </div>
              <div className="text-center mt-4 mr-auto">
                <Link to="/">
                  <button className="btn bg-success border-0 font-bold text-white">
                    Go to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-2">
        <h3 className="text-3xl font-bold text-center mb-8 pt-8">
          {name}'s most popular recipes!
        </h3>
        <div className="gap-3 w-4/5 mx-auto">
          {recipes.map((recipe) => (
            <div className="ml-6" key={id}>
              <ChefRecipes recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
