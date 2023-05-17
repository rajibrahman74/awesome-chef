import React from "react";
import heroImage from "../../public/images/heroImage.png";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto pt-[55px] mb-[130px] flex flex-col-reverse md:flex-row justify-center items-center gap-[70px] px-4">
      <div className="flex flex-col gap-[30px] md:w-1/2 md:pl-[30px] xs:text-center">
        <h1 className="text-[#1A1919] text-[35px] md:text-[57px] m-0 font-bold">
          Master Korean Chef or Executive Korean Chef
        </h1>
        <p className="text-[#757575] text-[17px] m-0">
          A Korean chef is a skilled culinary professional who specializes in
          the preparation and presentation of traditional Korean cuisine. Korean
          cuisine is known for its bold flavors, unique ingredients, and
          emphasis on healthy, fresh ingredients.
        </p>
        <span>
          <button className="btn border-0 text-white bg-success px-6 py-2.5 font-bold rounded-md flex items-center gap-2">
            <PhoneArrowUpRightIcon className="h-5 w-5" />
            Contact Now
          </button>
        </span>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="max-w-full" src={heroImage} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;