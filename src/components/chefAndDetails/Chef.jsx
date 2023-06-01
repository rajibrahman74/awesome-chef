import React from "react";
import { Link } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import Recepies from "../../../public/icons/recepies.png";
import LazyLoad from "react-lazy-load";

const Chef = ({ chef }) => {
  const { id, picture, name, years_experience, num_recipes, likes } = chef;
  return (
    <div className="mx-auto">
      <div className="text-gray-600 card shadow-lg max-w-[384px] h-500 mx-auto bg-white border">
        <figure style={{ height: "300px" }}>
          <LazyLoad>
            <img
              src={picture}
              alt="Chef"
              style={{
                width: "350px",
                height: "100%",
              }}
              loading="lazy"
            />
          </LazyLoad>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold uppercase text-2xl">{name}</h2>
          <span className="flex items-center font-semibold text-sm gap">
            <CalendarDaysIcon className="w-6 h-6  mr-2" />
            {years_experience} years of experience
          </span>

          <div className="flex items-center justify-center gap-12 py-2">
            <span className="flex items-center text-md font-semibold">
              <HandThumbUpIcon className="w-6 h-6  mr-2" />
              {likes}
            </span>
            <span className="flex items-center text-md font-semibold">
              <img className="w-6 h-6 mr-2" src={Recepies} alt="" />
              {num_recipes} of recipes.
            </span>
          </div>
          <div className="card-actions w-[22rem] h-[2rem] bg-[#2f8161] text-white justify-center items-center">
            <Link to={`/chef-details/${id}`}>
              <button className="border-0 font-bold hover:text-green-200 transition duration-300">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;