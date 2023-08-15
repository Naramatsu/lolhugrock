import { CHANGE_LANGUAJE } from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANGUAJE:
      return {
        ...state,
        languaje: payload,
      };

    default:
      return state;
  }
};

export default reducer;
