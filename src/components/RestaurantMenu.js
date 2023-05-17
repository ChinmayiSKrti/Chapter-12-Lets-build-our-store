import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ICON_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import MenuCategoryItems from "./MenuCategoryItems";

const RestaurantMenu = () => {
  const params = useParams();
  //   console.log(params);

  const restaurantInfo = useRestaurant(params?.id);

  console.log("------------restaurantInfo", restaurantInfo);
  // console.log("------------restaurantInfo info",restaurantInfo.info);
  console.log("------------restaurantInfo menu", restaurantInfo?.menu);

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="mx-60 my-10">
      {/* First section with Restaurant name, filters, location, distance, delivery fee and rating details */}
      <div className="container">
        {/* <div className="mx-60 my-10"> */}
        <div className="flex">
          <div className="flex-1">
            <p className="font-bold text-lg py-1">
              {restaurantInfo?.info?.name}
            </p>
            <p className="text-sm text-slate-400">
              {restaurantInfo?.info?.cuisines.join(", ")}
            </p>
            <p className="text-sm text-slate-400">
              {restaurantInfo?.info?.areaName},{" "}
              {restaurantInfo?.info?.sla?.lastMileTravelString}
            </p>
          </div>
          <div className="flex flex-col w-24 border-slate-300 border rounded">
            <div className="flex flex-1 p-1 border-slate-300 border-b text-green-600 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-green-600 flex-1 pt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <p className="flex-1 text-lg font-bold">
                {restaurantInfo?.info?.avgRatingString}
              </p>
            </div>
            <p className="flex-1 p-1 text-xs text-slate-400 font-bold pt-2 pl-2">
              {restaurantInfo?.info?.totalRatingsString}
            </p>
          </div>
        </div>
        <div className="flex my-2 pb-3 border-dashed border-b-2 border-b-slate-400">
          <img
            className="text-sm text-slate-400 py-1"
            src={ICON_URL + restaurantInfo?.info?.feeDetails?.icon}
          />
          <span className="text-sm text-slate-400 p-1">
            {restaurantInfo?.info?.feeDetails?.message}
          </span>
        </div>
        {/* </div> */}
      </div>
      {/* Menu accordions for diff categories of dishes */}
      <div className="container bg-slate-200">
        {restaurantInfo?.menu.map((category) => (
          <MenuCategoryItems key={category.title} category={category}/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
