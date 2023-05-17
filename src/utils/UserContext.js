import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Context Dummy Name",
    email: "contextdummyemail@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
