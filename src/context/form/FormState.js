import React, { useReducer } from "react";
import FormReducer from "./FormReducer";
import { RESET_FORM, SET_FORM, SET_FORM_BY_URL } from "./types";
import { FormAppContext } from "./";
import {
  FORM_PREFERENCES_NAMES_EN,
  FORM_PREFERENCES_NAMES_ES,
} from "../../utils/constants";
import { SPANISH } from "../languaje/types";
import { boostingForm } from "../../utils";

const FormState = ({ children }) => {
  const initialState = {
    // form: JSON.parse(localStorage.getItem("form")) || {},
    form: {},
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

  const resetForm = (title, languaje) => {
    const labels =
      languaje === SPANISH
        ? FORM_PREFERENCES_NAMES_ES
        : FORM_PREFERENCES_NAMES_EN;
    const actualForm = boostingForm(title, labels);

    dispatch({
      type: RESET_FORM,
      payload: actualForm,
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
