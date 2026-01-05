import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const Provider = ({ children }) => {

  // Server-URL
  const URL="https://fournine-server.onrender.com";

    let [data,setdata]=useState([]);
    

  return (
    <UserContext.Provider value={{data, setdata, URL}}>
      {children}
    </UserContext.Provider>
  );
};
