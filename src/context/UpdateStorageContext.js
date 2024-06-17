import { createContext } from "react";

export const UpdateStorageContext = createContext(null);

// TODO fix states in controllers

// import React, { createContext, useContext, useEffect, useState } from "react";

// const UpdateStorageContext = createContext();

// export const UpdateStorageProvider = ({ children }) => {
//   const [storage, setStorage] = useState(() => {
//     const localStorageValue = JSON.parse(localStorage.getItem("value")) || {};
//     return {
//       bgRounded: localStorageValue.bgRounded || 0,
//       bgPadding: localStorageValue.bgPadding || 40,
//       bgColor: localStorageValue.bgColor || "rgba(5,5,5,100)",
//     };
//   });

//   useEffect(() => {
//     localStorage.setItem("value", JSON.stringify(storage));
//   }, [storage]);

//   const updateStorage = (updates) => {
//     setStorage((prev) => ({ ...prev, ...updates }));
//   };

//   return (
//     <UpdateStorageContext.Provider value={{ storage, updateStorage }}>
//       {children}
//     </UpdateStorageContext.Provider>
//   );
// };

// export const useUpdateStorage = () => useContext(UpdateStorageContext);
