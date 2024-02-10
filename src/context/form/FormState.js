import React, { useReducer } from "react";
import FormReducer from "./FormReducer";
import { RESET_FORM, SET_FORM, SET_FORM_BY_URL } from "./types";
import { FormAppContext } from "./";

export const formInitialState = {
  "Division Boost": {
    "Rango Actual": {},
    "Rango Deseado": {},
  },
};

const FormState = ({ children }) => {
  const initialState = {
    form: JSON.parse(localStorage.getItem("form")) || formInitialState,
  };
  const [globalState, dispatch] = useReducer(FormReducer, initialState);

  const setForm = (params) => {
    dispatch({
      type: SET_FORM,
      payload: params,
    });
  };

  const setFormByUrl = (form) => {
    dispatch({
      type: SET_FORM_BY_URL,
      payload: form,
    });
  };

  const resetForm = () => {
    dispatch({
      type: RESET_FORM,
    });
  };

  const combineFunctions = {
    setForm,
    setFormByUrl,
    resetForm,
  };

  return (
    <FormAppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {children}
    </FormAppContext.Provider>
  );
};

export default FormState;
