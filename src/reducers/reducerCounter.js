const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_BARCA':
      return { ...state, counterBarca: state.counterBarca + 1 };
    case 'INCREMENT_REAL':
      return { ...state, counterReal: state.counterReal + 1 };
    default:
      return state;
    }
};

export default reducer;
