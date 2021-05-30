const defaultState = {
  theme: "light",
};

export const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return Object.assign({}, state, { theme: action.payload });
    default:
      return state;
  }
};
