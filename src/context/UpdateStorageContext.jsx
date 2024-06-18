/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const UpdateStorageContext = createContext();

const initialState = {
  bgRounded: 0,
  bgPadding: 40,
  bgColor: "rgba(5,5,5,100)",
  iconSize: 280,
  iconRotate: 0,
  iconColor: "rgba(255,255,255,10)",
  icon: "Anvil",
  pageIndex: 1,
};

const SET_STORAGE = "SET_STORAGE";

const storageReducer = (state, action) => {
  switch (action.type) {
    case SET_STORAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const UpdateStorageProvider = ({ children }) => {
  const [storage, dispatch] = useReducer(
    storageReducer,
    initialState,
    (initial) => {
      const localStorageValue = JSON.parse(localStorage.getItem("value")) || {};
      return { ...initial, ...localStorageValue };
    },
  );

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(storage));
  }, [storage]);

  const updateStorage = (updates) => {
    dispatch({ type: SET_STORAGE, payload: updates });
  };

  return (
    <UpdateStorageContext.Provider value={{ storage, updateStorage }}>
      {children}
    </UpdateStorageContext.Provider>
  );
};

export const useUpdateStorage = () => useContext(UpdateStorageContext);
