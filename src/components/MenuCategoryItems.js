import DishCard from "./DishCard";

const MenuCategoryItems = ({ category }) => {
  console.log("category - ", category);
  return (
    <>
      {category["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
        <div className="my-2 bg-white">
          <div class="p-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  {category.title} ({category.itemCards.length})
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                {category?.itemCards.map((dishInfo) => (
                  <DishCard
                    key={dishInfo?.card?.info?.id}
                    dish={dishInfo?.card?.info}
                  />
                ))}
              </div>
            </details>
          </div>
        </div>
      ) : (
        <div className="my-2 bg-white">
          <div class="p-5">
            <span className="font-medium">{category.title}</span>
            <div>
              {category?.categories.map((nestedDishInfo) => (
                <details class="group py-5 border-b border-slate-400">
                  <summary class="flex justify-between items-center cursor-pointer list-none">
                    <span> {nestedDishInfo.title} ({nestedDishInfo.itemCards.length})</span>
                    <span class="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {nestedDishInfo?.itemCards.map((dishInfo) => (
                      <DishCard
                        key={dishInfo?.card?.info?.id}
                        dish={dishInfo?.card?.info}
                      />
                    ))}
                  </div>
                </details>
              ))}
            </div>
            {/* </details> */}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCategoryItems;
