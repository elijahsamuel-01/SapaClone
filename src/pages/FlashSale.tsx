import { FaHeart, FaSearch, FaShareAlt } from "react-icons/fa";
import watch from "../Assets/w.png";
import watches from "../data/watch.json";
import { Link } from "react-router-dom";

export const FlashSale = () => {
  return (
    <div>
      <div className="w-full flex justify-center py-10 ">
        <div className="w-[95%] flex justify-center ">
          <div className="flex justify-between w-[90%]">
            <div>
              <div className="text-gray-700 uppercase text-[20px] ">
                {" "}
                Activity tracking
              </div>
              <div className="flex flex-row justify-between">
                <div className="text-[50px] font-black">Flash Sale</div>
                <div className="flex gap-1">
                  <div className=" text-white w-[60px] h-[60px] bg-orange-600 flex items-center justify-center flex-col text-[20px] font-extrabold">
                    352
                    <div className="text-[17px] font-normal">DAYS</div>
                  </div>
                  <div className=" text-white w-[60px] h-[60px] bg-orange-600 flex items-center justify-center flex-col text-[20px] font-extrabold">
                    15
                    <div className="text-[17px] font-normal">HOURS</div>
                  </div>
                  <div className=" text-white w-[60px] h-[60px] bg-orange-600 flex items-center justify-center flex-col text-[20px] font-extrabold">
                    54
                    <div className="text-[17px] font-normal">MINS</div>
                  </div>
                  <div className=" text-white w-[60px] h-[60px] bg-orange-600 flex items-center justify-center flex-col text-[20px] font-extrabold">
                    37
                    <div className="text-[17px] font-normal">SECS</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 w-full gap-5">
                {watches.map((el) => (
                  <Link to={`detail/${el.id}/cart`}>
                    <div key={el.id} className="min-h-[300px] ">
                      <div>
                        <div
                          style={{ backgroundImage: `url(${el.image})` }}
                          className="h-[350px] group  bg-contain bg-no-repeat cursor-pointer relative  bg-center  "
                        >
                          <div className="w-[100px] flex justify-center items-center text-white text-[16px] bg-amber-900 mb-5 ">
                            15%
                          </div>
                          <div className="w-[100px] flex justify-center items-center text-white text-[16px] bg-orange-600 ">
                            Featured
                          </div>

                          <div className="w-full py-2 bottom-0 flex justify-center items-center absolute text-white text-[25px] bg-gray-500 hover:bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100 ">
                            Add to Cart
                          </div>

                          <div className="absolute right-3 top-5 opacity-0 group-hover:opacity-100  ">
                            <div className="p-3 text-[20px] mb-2 bg-gray-200 rounded-md ">
                              <FaSearch />
                            </div>
                            <div className="p-3 text-[20px] mb-2 bg-gray-200 rounded-md ">
                              <FaHeart />
                            </div>
                            <div className="p-3 text-[20px] mb-2 bg-gray-200 rounded-md ">
                              <FaShareAlt />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>{el.name}</div>
                      <div className="text-orange-500 font-bold text-[15px]  ">
                        {" "}
                        ₦10000 - ₦{el.price}
                      </div>
                      <div>⭐⭐⭐⭐⭐</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
