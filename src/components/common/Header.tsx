import { FaAngleDown, FaCartPlus, FaSearch } from "react-icons/fa";
import { LuClock10 } from "react-icons/lu";
import { FaHeart, FaPerson } from "react-icons/fa6";
import logo from "../../Assets/logo-1.png";
import { useSelector } from "react-redux";

export const Header = () => {
  const length = useSelector((state: any) => state.cart);

  return (
    <div>
      <div className="w-full h-[55px] bg-[#e5d5f9] flex justify-center items-center ">
        <div className="w-[85%] flex justify-between items-center text-[12px] ">
          <div className="flex gap-5 items-center ">
            <div className="flex gap-3 items-center">
              English <FaAngleDown />{" "}
            </div>
            <div className="flex gap-3 items-center">
              USD <FaAngleDown />{" "}
            </div>
          </div>
          <div className="flex gap-5 items-center ">
            <div className="flex items-center gap-3">
              <LuClock10 />
              Recently viewed
            </div>
            <div className="flex items-center gap-3">
              <FaCartPlus />
              Order Tracking
            </div>
            <div className="flex items-center gap-1">
              <FaPerson />
              Login
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sticky top-0 h-[100px] bg-white flex justify-center items-center ">
        <div className="flex items-center justify-between w-[85%]  ">
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="flex items-center gap-5 ">
            <div className="hover:text-orange-600 transition-all duration-300 cursor-pointer ">
              {" "}
              Home
            </div>
            <div className="hover:text-orange-600 transition-all duration-300 cursor-pointer ">
              {" "}
              Shop
            </div>
            <div className="hover:text-orange-600 transition-all duration-300 cursor-pointer ">
              Pages
            </div>
            <div className="hover:text-orange-600 transition-all duration-300 cursor-pointer ">
              {" "}
              Blogs
            </div>
            <div className="hover:text-orange-600 transition-all duration-300 cursor-pointer ">
              {" "}
              Contact Us
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaSearch />
            <FaHeart className="border-r" />

            <div className="flex items-center relative">
              <FaCartPlus size={20} />
              <div className="w-5 h-5 rounded-full text-white absolute bottom-[-10px] right-[-10px] bg-black flex items-center justify-center ">
                {length.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
