import React from "react";
import SwiperCore, { Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const Testimonial = () => {
  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center  w-5/6 mx-auto">
        <h2 className="text-5xl font-bold mb-3">Testimonials</h2>
        <hr className="h-1 w-[18rem]"/>
        <p className="text-lg mt-1 mb-8">
          Check out our top-rated Thai dishes that you can easily make at home.
        </p>
      </div>
    <div className="max-w-4xl mx-auto text-center">
      <Swiper
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-white p-24 rounded-lg shadow-lg">
            <img src="https://m.timesofindia.com/photo/97028719/97028719.jpg" alt="Testimonial 1" className=" w-[5rem] h-[10rem] rounded-full mx-auto mb-6" />
            <h3 className="text-2xl text-gray-800 font-bold mb-2">John Doe</h3>
            <p className="text-lg text-gray-600">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet vestibulum mauris ac rutrum. Proin pulvinar malesuada nisl."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-24 rounded-lg shadow-lg">
            <img src="https://i.pinimg.com/736x/eb/dc/eb/ebdcebbeded7f600a24c366a37da4dfb.jpg" alt="Testimonial 2" className=" w-[5rem] h-[10rem] rounded-full mx-auto mb-6" />
            <h3 className="text-2xl text-gray-800 font-bold mb-2">Jane Smith</h3>
            <p className="text-lg text-gray-600">
              "Sed vel facilisis lectus. Mauris a arcu vitae leo iaculis lobortis. Suspendisse potenti. Fusce id gravida turpis, vitae volutpat arcu."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white  p-24 rounded-lg shadow-lg">
            <img src="https://e0.pxfuel.com/wallpapers/546/11/desktop-wallpaper-jimin-bts-park-jimin-thumbnail.jpg" alt="Testimonial 3" className="w-[5rem] h-[10rem] rounded-full mx-auto mb-6" />
            <h3 className="text-2xl text-gray-800 font-bold mb-2">Mike Johnson</h3>
            <p className="text-lg text-gray-600">
              "Quisque congue ligula at nunc congue, non lacinia tortor consequat. Mauris rutrum turpis et turpis scelerisque, at dictum enim pretium."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white  p-24 rounded-lg shadow-lg">
            <img src="https://static.wikia.nocookie.net/the-bangtan-boys/images/4/44/The_Astronaut_Concept_Photo_%281%29.png/" alt="Testimonial 4" className=" w-[5rem] h-[10rem] rounded-full mx-auto mb-6" />
            <h3 className="text-2xl text-gray-800 font-bold mb-2">Sarah Williams</h3>
            <p className="text-lg text-gray-600">
              "Vivamus consectetur est vitae neque ultricies, non vestibulum nulla consequat. Sed ultricies mauris eget posuere fermentum."
            </p>
          </div>
        </SwiperSlide>
        <div className="px-6 swiper-button-next" style={{ color: "#10B981" }}></div>
        <div className="px-6 swiper-button-prev" style={{ color: "#10B981" }}></div>
      </Swiper>
    </div>
  </section>
  );
};

export default Testimonial;

