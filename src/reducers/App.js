const initState = {
  text: '',
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case 'SAGA_SUCCESS':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}
