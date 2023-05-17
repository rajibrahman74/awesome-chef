import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-800 mt-12 py-6">
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-3xl text-slate-100 font-bold mb-2">
          What We Offer You
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Explore the Delightful World of Thai Cuisine with our Recipes, Tips,
          and Techniques.
        </p>
      </div>

      <div className="bg-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-5/6 mx-auto text-center">
        <div className=" rounded-lg overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/834259214/vector/catering-vector-badge-with-hand-written-modern-calligraphy.jpg?s=612x612&w=0&k=20&c=ScelXCL0o74Ev9wiHt1X6csASe7IZHnFdG2V2eLWBqg="
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">Catering</h3>
            <p className="text-gray-400">
              Experience the best of Thai cuisine at your next event.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="https://cdn4.iconfinder.com/data/icons/111-seo-services-pack/128/new_seo2-35-512.png"
            alt="Item 2 Image"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Order Online
            </h3>
            <p className="text-gray-400">
              Discover the convenience of online ordering with our Thai kitchen.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpn2uMRj3n_Kpltd3UJYB2Uxkz46vjMK-eA&usqp=CAU"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Private Dining
            </h3>
            <p className="text-gray-400">
              A personalized Thai dining experience for you and your guests.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="https://th.bing.com/th/id/R.187a0a9241f93c404b426a5726dafb3f?rik=Qc9G%2b01pNW8RyQ&pid=ImgRaw&r=0"
            alt="Item 4 Image"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Gift Cards
            </h3>
            <p className="text-gray-400">
              Show your appreciation with a Thai kitchen gift card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
