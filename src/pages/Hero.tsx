import React from "react";
import bg from "../Assets/wallpaperflare.com_wallpaper.jpg";
import watch from "../Assets/w.png";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div>
      <div
        className="w-full h-screen flex items-center backdrop-filter-[40px] backdrop-blur-[40px] justify-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-[85%] flex justify-between  ">
          <div className="w-[70%] ">
            <img
              src={watch}
              className=" object-contain w-[100%] h-[300px]"
              alt=""
            />
          </div>

          <div className="text-[white] w-[70%]">
            <div className="uppercase   text-[30px] ">Hybrid smartwatches</div>

            <div className="text-[40px] my-8 font-bold">
              Wearable health you'll want to wear
            </div>

            <div className="text-[15px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, voluptatibus eum? Distinctio nihil blanditiis nulla
              dicta aperiam quae nam odit quod quisquam voluptatibus, illum,
              libero accusamus rem nostrum doloribus iste!
            </div>

            <div className="flex items-start flex-col">
              #1
              <div className="text-orange-500">Worldwide</div>
              <div>sapa invented the first hybrid smartwatch</div>
              <div className=" bg-orange-500 cursor-pointer items-center flex py-5 gap-5 px-10 ">
                Buy Now <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
