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
      <div className="card shadow-lg pt-7 max-w-[375px] h-700 mx-auto">
        <figure style={{ height: "300px" }}>
          <LazyLoad>
            <img
              src={picture}
              alt="Chef"
              style={{
                width: "450px",
                height: "100%",
                borderRadius: "0.75rem",
              }}
              loading="lazy"
            />
          </LazyLoad>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{name}</h2>
          <span className="flex items-center font-semibold text-md gap">
            <CalendarDaysIcon className="w-6 h-6 text-gray-500 mr-2" />
            {years_experience} Years of experiences
          </span>

          <div className="flex items-center justify-center gap-12 py-2">
            <span className="flex items-center text-md font-semibold">
              <HandThumbUpIcon className="w-6 h-6 text-gray-500 mr-2" />
              {likes}
            </span>
            <span className="flex items-center text-md font-semibold">
              <img className="w-6 h-6 mr-2" src={Recepies} alt="" />
              {num_recipes} of recipes.
            </span>
          </div>
          <div className="card-actions">
            <Link to={`/chef-details/${id}`}>
              <button className="btn bg-success border-0 text-white font-bold">
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