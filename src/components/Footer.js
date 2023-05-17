import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = (value) => {
  const { user } = useContext(UserContext);
  // console.log('user in footer component -',user);
  // console.log('value - ',value);

  return (
    <div className="relative bg-orange-200">
      <h4>
        This site is developed by {user.name} - {user.email}
      </h4>
      <h4>
        This site is developed by {user.name} - {user.email}
      </h4>
      <h4>
        This site is developed by {user.name} - {user.email}
      </h4>
      <h4>
        This site is developed by {user.name} - {user.email}
      </h4>
      <h4>
        This site is developed by {user.name} - {user.email}
      </h4>
      <h4>
        This site is developed by {user.name} - {user.email}
      </h4>
    </div>
  );
};

export default Footer;
