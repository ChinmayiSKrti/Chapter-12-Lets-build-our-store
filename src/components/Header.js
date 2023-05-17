import { useState, useContext } from "react";
import logoImage from "/public/GoodFood.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img className="h-24 p-2" alt="Logo image" src={logoImage} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);
  // console.log('user in header component -',user);

  const cartItems = useSelector(store => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-300 shadow-lg">
      <Title />
      <div>
        <ul className="flex py-10">
          <li className="px-2 text-white font-bold"><Link to="/">Home</Link></li>
          <li className="px-2 text-white font-bold"><Link to="/about">About</Link></li>
          <li className="px-2 text-white font-bold"><Link to="/contact">Contact</Link></li>
          <li className="px-2 text-white font-bold"><Link to="/instamart">InstaMart</Link></li>
          <li className="px-2 text-white font-bold">Cart - {cartItems.length} items</li>
        </ul>
      </div>
      {/* <h4>{isOnline? "✅" : "🔴"}</h4> */}
      <span className="p-10 font-bold text-orange-600">{user.name}</span>
      {isLoggedIn ? (
        <div className="flex">
          <span className="pt-10">{isOnline? "✅" : "🔴"}</span>
          <button onClick={() => setIsLoggedIn(false)} className="text-white font-bold pr-10 pl-3">Logout</button>
        </div>
      ) : (
        <div className="flex">
          <span className="pt-10">{isOnline? "✅" : "🔴"}</span>
          <button onClick={() => setIsLoggedIn(true)} className="text-white font-bold pr-10 pl-3">Login</button>
        </div>
      )}
    </div>
  );
};

export default Header;
