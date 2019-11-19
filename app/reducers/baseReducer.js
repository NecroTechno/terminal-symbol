const initialState = {
  // base
  count: 0
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
          ...state,
          count: state.count + 1
        }
    default:
      return state
  }
};
