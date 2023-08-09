import React, { useReducer } from "react";
import FormReducer from "./FormReducer";
import { SET_FORM } from "./types";
import { AppContext } from "..";

const FormState = ({ children }) => {
  const initialState = {
    form: {},
  };
  const [globalState, dispatch] = useReducer(FormReducer, initialState);

  const setForm = (params) => {
    dispatch({
      type: SET_FORM,
      payload: params,
    });
  };

  const combineFunctions = {
    setForm,
  };

  return (
    <AppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {children}
    </AppContext.Provider>
  );
};

export default FormState;
