import React, { useReducer } from "react";
import LanguajeReducer from "./LanguajeReducer";
import { LanguajeAppContext } from "./";
import { CHANGE_LANGUAJE, SPANISH } from "./types";

const LanguajeState = ({ children }) => {
  const initialState = {
    languaje: SPANISH,
  };
  const [globalState, dispatch] = useReducer(LanguajeReducer, initialState);

  const setLanguaje = (languaje) => {
    dispatch({
      type: CHANGE_LANGUAJE,
      payload: languaje,
    });
  };

  const combineFunctions = {
    setLanguaje,
  };

  return (
    <LanguajeAppContext.Provider value={{ ...globalState, combineFunctions }}>
      {children}
    </LanguajeAppContext.Provider>
  );
};

export default LanguajeState;
