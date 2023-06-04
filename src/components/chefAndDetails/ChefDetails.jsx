import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import ChefRecipes from "./ChefRecipes";
import Recepies from "/icons/recepies.png";
import LazyLoad from "react-lazy-load";
import { Button } from "../Button";
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
    <div className="px-4">
      <div className="mt-[30px]">
        <div className="px-4 py-8 lg:px-16 lg:py-12">
          <div className="flex flex-col justify-center items-center">
              <LazyLoad>
                <img
                  src={picture}
                  className="w-[50rem] h-[20rem] rounded-md shadow-lg"
                  alt={name}
                />
              </LazyLoad>
            
            <div className="flex flex-col justify-center ">
              <div className="text-center">
                <h2 className="pt-3 text-5xl font-bold">{name}</h2>
                <p className="text-lg py-4">{bio}</p>
                <div className="flex md:flex-row flex-col items-center justify-center gap-4  py-2">
                  <span className="flex items-center text-md gap">
                    <CalendarDaysIcon className="w-6 h-6 text-gray-500 mr-2" />
                    {years_experience} Years of experiences
                  </span>
                  <span className="flex items-center">
                    <img className="w-6 h-6 mr-2" src={Recepies} alt="" />
                    {num_recipes} of recipes.
                  </span>
                  <span className="flex items-center justify-center text-center">
                    <HandThumbUpIcon className="w-6 h-6 text-gray-500 mr-2" />
                    {likes}
                  </span>
                  
                </div>
                <Link to="/" className="flex  justify-center py-2 ">
                 <Button text="Go Back"/>
                </Link>
                
        
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="my-2">
        <h3 className="lg:text-5xl text-4xl font-bold text-center mb-8 py-8">
          {name}'s most popular recipes!
        </h3>
        <div className="mx-auto md:flex flex-wrap  justify-center ">
          {recipes.map((recipe) => (
            <div className="mx-2 w-full lg:w-[30%]" key={id}>
              <ChefRecipes recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
