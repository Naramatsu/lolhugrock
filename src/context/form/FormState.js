import React, { useReducer } from "react";
import FormReducer from "./FormReducer";
import { RESET_FORM, SET_FORM } from "./types";
import { FormAppContext } from "./";

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

  const resetForm = () => {
    dispatch({
      type: RESET_FORM,
      payload: initialState,
    });
  };

  const combineFunctions = {
    setForm,
    resetForm,
  };

  return (
    <FormAppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {children}
    </FormAppContext.Provider>
  );
};

export default FormState;
