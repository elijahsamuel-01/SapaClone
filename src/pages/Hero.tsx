import React from "react";
import bg from "../Assets/wallpaperflare.com_wallpaper.jpg";
import watch from "../Assets/w.png";
import { FaArrowRight } from "react-icons/fa";
import herowatch from "./../assets/img-slider1-01.png";

export const Hero = () => {
  return (
    <div>
      <div className="w-full h-[860px] bg-pink-600 flex items-center justify-center gap-[47px]">
        <div className="w-[44%] mt-5  h-[700px]">
          <img src={herowatch} className="w-full h-full" />
        </div>
        <div className=" w-[40%] h-[500px] flex flex-col gap-3">
          <div className="font-medium text-white">HYBRID SMARTWATCHES</div>
          <div className="text-[48px]  font-sans font-extrabold text-white leading-none">
            Wearable health you'll want to wear
          </div>
          <div className="text-white font-medium text-[13px] w-[90%]">
            Explore a range of hybrid smartwatches crafted to track, monitor and
            improve overall health and wellness. Powered by state-of-the-art
            technology, Sapa tracker are renowned for their award-winning design
            and unsurpassed battery life.
          </div>
          <div>
            <div className="font-semibold mt-[30px] text-[13px] text-white">
              #1
            </div>
            <div className="text-orange-600 text-[18px] font-semibold">
              WORLDWIDE
            </div>
            <div className="text-white font-medium text-[15px]">
              Sapa Invented The First hybrid Smart Watch
            </div>
          </div>

          <div className="flex w-[150px] h-[45px] bg-orange-500 items-center justify-center text-white gap-2 rounded-md cursor-pointer">
            Buy now{" "}
            <div>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
