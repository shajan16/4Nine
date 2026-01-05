import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const Provider = ({ children }) => {

  // Server-URL
  const URL="http://localhost:4000";

    let [data,setdata]=useState([]);
    

  return (
    <UserContext.Provider value={{data, setdata, URL}}>
      {children}
    </UserContext.Provider>
  );
};