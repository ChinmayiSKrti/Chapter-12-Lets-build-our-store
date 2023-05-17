import { useState, useEffect } from "react";
import {
  FETCH_MENU_URL,
  ITEM_CATEGORY_STRING,
  NESTED_ITEM_CATEGORY_STRING,
} from "../constants";

const useRestaurant = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const jsonData = await data.json();
    // console.log("Menu full data - ", jsonData);
    // console.log("Info data - ", jsonData.data.cards[0].card.card.info);
    // console.log(
    //   "Menu List data data - ",
    //   jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    // );
    const info = jsonData?.data?.cards[0]?.card?.card?.info;
    const fullMenuList =
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    const extractedMenuList = fullMenuList.map((item) => {
      if (
        item.card.card["@type"] === ITEM_CATEGORY_STRING ||
        item.card.card["@type"] === NESTED_ITEM_CATEGORY_STRING
      ) {
        return item.card.card;
      }
    });

    const menuInfo = {
      info : info,
      menu : extractedMenuList.filter(value => value !== undefined)
      // offers : extractedOffersCarousal
      // vegOrNon : extractedVegOrNonCategory
    }

    setRestaurantInfo(menuInfo);
  }
  return restaurantInfo;
};

export default useRestaurant;
