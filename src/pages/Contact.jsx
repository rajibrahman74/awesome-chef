import React from "react";
import { Button } from "../components/Button.jsx";

const Contact = () => {
  return (
    <section className="items-center  py-20 md:px-4 px-2 overflow-hidden">
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <h2 className="text-4xl md:text-6xl text-gray-600 font-bold mb-2 uppercase">
        Contact Us
        </h2>
        <hr className="h-1 w-[24rem] "/>
        <p className="text-lg text-gray-600 mt-3 mb-8">
          Explore the Delightful World of Thai Cuisine with our Recipes, Tips,
          and Techniques.
        </p>
      </div>
      <div className="lg:w-[50rem] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <form>
            <div className="mb-4 ">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-b-2 px-2 py-4 border-gray-300  shadow-sm sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4 ">
              <input
                 type="email"
                 id="email"
                 name="email"
                className="w-full border-b-2 px-2 py-4 border-gray-300  shadow-sm sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 ">
              <textarea
                  id="message"
                  name="message"
                  rows="4"
                className="w-full border-b-2 px-2 py-4 border-gray-300  shadow-sm sm:text-sm"
                placeholder="Message"
              />
            </div>
            <div className="mb-6 justify-center flex flex-col">
            <Button text="Contact Now" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
