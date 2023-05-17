import { DISH_IMG } from "../constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const DishCard = ({ dish }) => {
  // console.log("dish - ", dish);

  const dispatch = useDispatch();

  const handleAddItems = () => {
    dispatch(addItem("Grapes"));
  }

  return (
    <>
      <div className="container">
        <div className="my-2 py-6 border-b border-solid">
          <div className="flex">
            <div className="flex-1">
              {dish?.itemAttribute?.vegClassifier === "VEG" ? (
                <div className="text-xs text-green-500 font-bold">
                  {dish?.itemAttribute?.vegClassifier}
                </div>
              ) : (
                <div className="text-xs text-red-600 font-bold">
                  {dish?.itemAttribute?.vegClassifier}
                </div>
              )}
              <div className="text-lg font-bold">{dish?.name}</div>
              <div className="text-sm">
                ₹{dish?.price ? dish?.price / 100 : dish.defaultPrice / 100}
              </div>
              <div className="text-sm text-slate-400">{dish?.description}</div>
            </div>
            <div className="p-2">
              <img
                className="rounded-lg h-30 w-40"
                alt="dish image"
                src={DISH_IMG + dish?.imageId}
              />
              <div className="flex">
                <button className="flex-1 text-xs m-2 font-bold border rounded border-slate-400 text-green-500" onClick={() => handleAddItems()}>
                  ADD
                </button>
                <button className="flex-1 text-xs m-2 font-bold border rounded border-slate-400 text-red-400">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishCard;
