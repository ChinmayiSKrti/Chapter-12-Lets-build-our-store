import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";

const RestaurantCards = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {

    const { user } = useContext(UserContext);
    // console.log('user in restaurant card component -',user);

    return (
      <div className="w-72 h-72 p-4 m-1 shadow-lg">
        <img src={IMG_CDN_URL+cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h5 className="text-xs">{cuisines.join(", ")}</h5>
        <h5 className="text-xs">{lastMileTravelString}</h5>
        <h5 className="text-xs">{user.name} -{user.email}</h5>
      </div>
    );
  };

  export default RestaurantCards;