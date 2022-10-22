import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const authinfo = { user };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
