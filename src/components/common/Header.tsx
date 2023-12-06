import { FaAngleDown, FaCartPlus, FaSearch } from "react-icons/fa";
import { LuClock10 } from "react-icons/lu";
import { FaHeart, FaPerson } from "react-icons/fa6";
import logo from "../../Assets/logo-1.png";
import { useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

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

      <div>
        <div className="h-[13vh] w-full flex items-center justify-center">
          <div className="w-[96%] h-[90%] flex justify-between items-center">
            <div>
              <img src={logo} className="w-[160px] h-[60px]" />
            </div>
            <div className="flex gap-5 hover:cursor-pointer">
              <div className="text-orange-400 hover:cursor-pointer font-medium">
                Home
              </div>
              <div className="flex hover:cursor-pointer hover:text-orange-400 transition-all ease-in-out font-medium">
                <div className="flex font-medium">Shop</div>
                <div className="text-[18px] flex items-center font-medium">
                  <RiArrowDropDownLine />
                </div>
              </div>
              <div className="flex hover:text-orange-400 transition-all ease-in-out cursor-pointer ">
                <div className="font-medium">Pages</div>
                <div className="text-[18px] flex items-center font-medium">
                  <RiArrowDropDownLine />
                </div>
              </div>
              <div className="flex hover:cursor-pointer hover:text-orange-400 transition-all ease-in-out font-medium">
                <div className="font-medium">Blogs</div>
                <div className="text-[18px] flex items-center font-medium">
                  <RiArrowDropDownLine />
                </div>
              </div>
              <div className="flex hover:cursor-pointer font-medium hover:text-orange-400 transition-all ease-in-out">
                Contact Us
              </div>
            </div>
            <div className="text-[24px] flex gap-3">
              <div className="">
                <IoSearch />
              </div>
              <div className="">
                <FaRegHeart />
              </div>
              <Link to="/detail/:id/cart">
                <div className="">
                  <TiShoppingCart />{" "}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
