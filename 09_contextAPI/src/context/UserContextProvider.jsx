import UserContext from "./UserContext";
import React, { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserContextProvider;
