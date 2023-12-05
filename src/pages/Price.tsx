import React, { useState } from "react";
import watches from "../data/watch.json";
import { useParams } from "react-router";
import i from "../Assets/product-20-480x638.jpg";
import { useSelector } from "react-redux";
import { FaMarker } from "react-icons/fa";

export const Price = () => {
  const { id }: any = useParams();

  const data = useSelector((state: any) => state.cart);
  const watch = data.find((el: any) => {
    return el.id === id;
  });

  const [flat, setFlat] = useState(true);
  const [local, setLocal] = useState(false);

  const total = data
    .map((el: any) => el.price)
    .reduce((a: any, b: any) => a + b);
  console.log(watch);

  var money = total;

  if (flat === true) {
    money += 2500;
  } else if (local === true) {
    money += 1500;
  }

  return (
    <div>
      <div className="w-full py-20 text-[30px] font-bold flex flex-col items-center justify-center ">
        <div className=" ">Shoppin Cart</div>
        <div className="text-[15px] ">Home {`>`} Page</div>
      </div>

      <div className="w-full justify-center flex">
        <div className="w-[85%] ">
          <div className="w-full pb-2 border-b flex justify-between ">
            <div className="pl-10 w-[70%]">Product</div>
            <div className="flex">
              <div className="w-[200px]">Price</div>
              <div className="w-[200px]">QTY</div>
              <div className="w-[200px]">Total</div>
            </div>
          </div>
          {data.map((el: any) => (
            <div className="w-full justify-between items-center flex pb-5 border-b pt-5 ">
              <div className="w-[70%] flex items-center ">
                <div className="w-full flex items-center">
                  <div
                    className="w-[100px]  bg-contain bg-no-repeat bg-center h-[100px] object-contain"
                    style={{
                      backgroundImage: `url(${i})`,
                    }}
                  />
                  <div>{el?.name}</div>
                </div>
              </div>

              <div className="flex ">
                <div className="w-[200px]">{el?.price}</div>
                <div className="w-[200px] flex justify-start items-center ">
                  <div className="W-[100px] h-[30px] border py-3 px-4 p-3 bg-gray-300 flex gap-4 items-center justify-center ">
                    <div>-</div>
                    <div>0</div>
                    <div>+</div>
                  </div>
                </div>
                <div className="w-[200px]">
                  {data
                    .map((el: any) => el.price)
                    .reduce((a: any, b: any) => a + b)}
                </div>
              </div>
            </div>
          ))}

          <div className="w-full flex justify-between ">
            <div className="p-10 py-4 text-white mt-10 bg-orange-500 ">
              Continue Shopping
            </div>
            <div className="p-10 py-4 text-white mt-10 bg-orange-500 ">
              Update Cart
            </div>
          </div>

          <div className="w-full mt-10 mb-10 flex">
            <div className="w-[34%] ">
              <strong>Coupon</strong>
              <div className="flex gap-5">
                <input
                  placeholder="Enter coupon code here"
                  type="text"
                  className="flex-[0.7] outline-none bg-gray-200 flex py-2 pl-3 text-[14px] "
                />
                <div className="py-2 px-3 text-white bg-orange-500 ">
                  {" "}
                  Apply Coupon
                </div>
              </div>
            </div>
            <div className="w-[34%] ">
              <strong className="">Cart totals</strong>
              <div className="w-full border-b my-3 " />

              <div className="flex justify-between">
                <div className="text-[15px]">Subtotal</div>
                <div className="text-orange-500">₦{total}</div>
              </div>

              <div className="flex mt-5 justify-between">
                <div className="text-[15px]">Shipping</div>
                <div className="text-orange-0 flex flex-col items-end">
                  <div className="flex gap-5 text-[14px] items-center">
                    Flat rate: ₦2500
                    {flat ? (
                      <div
                        className=" cursor-pointer bg-orange-500 w-6 flex justify-center items-center h-6 text-black "
                        onClick={() => {
                          setFlat(false);
                          setLocal(true);
                        }}
                      >
                        <FaMarker />
                      </div>
                    ) : (
                      <div
                        className=" cursor-pointer  w-6 h-6 border-[4px] border-orange-500 rounded-md"
                        onClick={() => {
                          setFlat(true);
                          setLocal(false);
                        }}
                      />
                    )}
                  </div>
                  <div className=" cursor-pointer flex gap-5 mt-2 text-[14px] items-center">
                    Local pickup: ₦1500
                    {local ? (
                      <div
                        className=" cursor-pointer bg-orange-500 w-6 flex justify-center items-center h-6 text-black "
                        onClick={() => {
                          setFlat(false);
                          setLocal(true);
                        }}
                      >
                        <FaMarker />
                      </div>
                    ) : (
                      <div
                        className=" cursor-pointer  w-6 h-6 border-[4px] border-orange-500 rounded-md"
                        onClick={() => {
                          setFlat(false);
                          setLocal(true);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full border-b my-3 " />

              <div className="flex justify-between">
                <div>Total</div>
                <div className="text-orange-500">{money}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
