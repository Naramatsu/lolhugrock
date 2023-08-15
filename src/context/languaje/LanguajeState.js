import React, { useReducer } from "react";
import LanguajeReducer from "./LanguajeReducer";
import { AppContext } from "..";
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
    <AppContext.Provider value={{ ...globalState, combineFunctions }}>
      {children}
    </AppContext.Provider>
  );
};

export default LanguajeState;
