import { restaurantList } from "../constants";
import RestaurantCards from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {
  //searchText is a local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // console.log("useEffect");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log("Intial restaurant list data - ",jsonData);
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  // console.log("render");
  // console.log(restaurants);

  // const isOnline = useOnline();
  // if(!isOnline) {
  //   return <h1>OFFLINE, PLEASE CHECK YOUR INTERNET CONNECTION :(</h1>
  // }

  if (!allRestaurants) return null;

  if (allRestaurants?.length!==0 && filteredRestaurants?.length === 0)
    return <h1>No Restaurants matched your filter!!</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 text-center">
        <input
          type="text"
          className="bg-gray-100 p-1 rounded-l-xl w-80"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-orange-300 p-1 rounded-r-xl w-24 text-white font-bold hover:bg-orange-400"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value})
          }
        />
        <input
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value})
          }
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCards {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
