import { RESET_FORM, SET_FORM, SET_FORM_BY_URL } from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FORM:
      const { title, property, item } = payload;
      localStorage.setItem(
        "form",
        JSON.stringify({
          [title]: {
            ...state.form[title],
            [property]: item,
          },
        })
      );
      return {
        ...state,
        form: {
          [title]: {
            ...state.form[title],
            [property]: item,
          },
        },
      };
    case SET_FORM_BY_URL:
      localStorage.setItem("form", JSON.stringify(payload));
      return {
        ...state,
        form: payload,
      };
    case RESET_FORM:
      localStorage.setItem("form", JSON.stringify(payload));
      return {
        form: payload,
      };
    default:
      return state;
  }
};

export default reducer;
