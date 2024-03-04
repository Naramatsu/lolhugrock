import { RESET_FORM, SET_FORM, SET_FORM_BY_URL } from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FORM:
      const { title, property, item } = payload;
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
      return {
        ...state,
        form: payload,
      };
    case RESET_FORM:
      return {
        form: payload,
      };
    default:
      return state;
  }
};

export default reducer;
