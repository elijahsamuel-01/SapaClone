import { useParams } from "react-router";
import watches from "../data/watch.json";
import {
  FaBoxOpen,
  FaFacebook,
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaQuestionCircle,
  FaSearch,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { LuFacebook, LuListX, LuMail, LuPenTool } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, reduceCart } from "../global/reduxState";
import { Link } from "react-router-dom";

export const Detail = () => {
  const { id }: any = useParams();
  const [quantity, setQuantity] = useState(0);

  const watch = watches.find((el) => el.id === id);

  console.log(watch);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const time = new Date().getTime();
    const thatDay = new Date("01/01/2024 00:00:00").getTime();

    const difference = thatDay - time;

    const inty = setInterval(() => {
      clearInterval(inty);
      const dDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(dDays);

      const dHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(dHours);

      const dMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMinutes(dMinutes);

      const dSeconds = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(dSeconds);
    }, 1000);
  }, [seconds]);

  const dispatch = useDispatch();

  const it = useSelector((state: any) => state.cart);
  const found = it.find((el: any) => el.id === id);

  return (
    <div>
      <div className="w-full flex justify-center ">
        <div className="w-[85%]  flex justify-between ">
          <div className="h-[100vh] border rounded-md w-[50%] ">
            <div
              style={{ backgroundImage: `url(.${watch?.image})` }}
              className="h-[100%] group p-2  bg-contain bg-no-repeat cursor-zoom-in relative  bg-center  "
            >
              <div className="w-[100px] flex justify-center items-center text-white text-[16px] bg-amber-900 mb-5 ">
                15%
              </div>
              <div className="w-[100px] flex justify-center items-center text-white text-[16px] bg-orange-600 ">
                Featured
              </div>
            </div>
          </div>

          <div className="w-[45%] p-10 ">
            <div className="text-[45px] font-bold ">{watch?.name}</div>
            <div className="text-orange-500">₦{watch?.price}</div>

            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              fuga expedita, eum perspiciatis voluptates doloribus explicabo
              dolorem quae natus odit earum aspernatur aliquid soluta
              praesentium et! Sed neque soluta illo?
            </div>

            <div>
              <div className="flex items-center my-4">
                <div className="w-2 h-2 mr-2 rounded-full bg-gray-400  " />
                <div>
                  79% organic cotton, 13% lyocell, 6% polyester, 2% elastane
                </div>
              </div>
              <div className="flex items-center my-4">
                <div className="w-2 h-2 mr-2 rounded-full bg-gray-400  " />
                <div>Five-pocket styling</div>
              </div>
            </div>

            <div>
              <div className="w-full bg-gray overflow-hidden rounded-md  ">
                <div className="w-[30%] bg-orange-500 h-full rounded-l-md " />
              </div>
              <div>
                Available: <strong className="pr-3 border-r mr-3 ">43</strong>{" "}
                Sold: <strong>14</strong>
              </div>
            </div>

            <div className="flex gap-4 mt-4 items-center">
              <div className=" flex flex-col items-center">
                <div className="px-4 py-2 text-[25px]  flex flex-col items-center  bg-orange-500 rounded-md text-white  ">
                  {days}
                </div>
                <div>Days</div>
              </div>

              <div className=" flex flex-col items-center">
                <div className="px-4 py-2 text-[25px]  flex flex-col items-center  bg-orange-500 rounded-md text-white  ">
                  {hours}
                </div>
                <div>Hours</div>
              </div>
              <div className=" flex flex-col items-center">
                <div className="px-4 py-2 text-[25px]  flex flex-col items-center  bg-orange-500 rounded-md text-white  ">
                  {minutes}
                </div>
                <div>Minutes</div>
              </div>
              <div className=" flex flex-col items-center">
                <div className="px-4 py-2 text-[25px]  flex flex-col items-center  bg-orange-500 rounded-md text-white  ">
                  {seconds}
                </div>
                <div>Seconds</div>
              </div>
            </div>

            <div className="border p-5 mt-10">
              <div className="flex gap-5 ">
                <div className="px-4 py-2 flex gap-4 border items-center   ">
                  {" "}
                  <span
                    className="cursor-pointer "
                    onClick={() => {
                      if (quantity > 0) {
                        setQuantity(quantity - 1);
                      }

                      dispatch(reduceCart(watch));
                    }}
                  >
                    -
                  </span>{" "}
                  {found?.QTY ? found!.QTY : 0}{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setQuantity(quantity + 1);
                      dispatch(addCart(watch));
                    }}
                  >
                    +
                  </span>{" "}
                </div>
                <div
                  className="px-10 py-4 cursor-pointer bg-black text-white "
                  onClick={() => {
                    dispatch(addCart(watch));
                  }}
                >
                  Add to Cart{" "}
                </div>

                <Link to={`buy`}>
                  <div className="px-7 py-4 bg-orange-500 text-white ">
                    Buy Now{" "}
                  </div>
                </Link>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex gap-5 items-center mt-7 ">
                  <FaHeart />
                  <div>Add to wishlist</div>
                </div>

                <div className="flex gap-3 items-center mt-7 ">
                  <LuListX size={20} />
                  <div>Add to compare</div>
                </div>
              </div>
            </div>

            <div className="border w-full px-5 py-5 gap-10 flex items-center ">
              <div className="flex gap-5 items-center ">
                <LuPenTool /> Size Guide{" "}
              </div>
              <div className="flex gap-5 items-center ">
                <FaBoxOpen /> Delivery Return{" "}
              </div>
              <div className="flex gap-5 items-center ">
                <FaQuestionCircle /> Delivery Return{" "}
              </div>
            </div>

            <div className="mt-10">
              <div>
                <span className="text-[14px] text-gray-400 ">SKU: </span>
                MEGA-JEWE-01
              </div>
              <div>
                <span className="text-[14px] text-gray-400 ">Tags: </span>{" "}
                Activity tracker, Digital watch, Fitness tracker, Health
                monitoring, Sleep tracking,
              </div>
              <div>
                <span className="text-[14px] text-gray-400 ">Brand: </span> Elsa
                Peretti,
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-blue-600">
                <FaFacebookF />
              </div>

              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-blue-400">
                <FaTwitter />
              </div>

              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-blue-500">
                <FaLinkedinIn />
              </div>

              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-red-500">
                <LuMail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
