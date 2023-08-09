import { SET_FORM } from "./types";

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

    default:
      return state;
  }
};

export default reducer;
