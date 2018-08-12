const reducerCounter = (state={counterBarca:0,counterReal:0}, action) => {
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case 'INCREMENT_BARCA':
      return { ...state, counterBarca: state.counterBarca + 1};
    case 'INCREMENT_REAL':
      return { ...state, counterReal: state.counterReal + 1 };
    default:
      return state;
    }
};

export default reducerCounter;
