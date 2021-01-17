const InitialState = {
  value: 0
};

export const secondCounter = (state = InitialState, action) => {
  switch (action.type) {
    case "addToSecondCounter":
      return {
        ...state,
        value: state.value + 1
      };
    default:
      return state;
  }
};