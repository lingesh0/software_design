// src/store/reducer.js
const initialState = {
  selectedAdmin: null,
  selectedWorkspace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ADMIN':
      return { ...state, selectedAdmin: action.payload, selectedWorkspace: null };
    case 'SET_SELECTED_WORKSPACE':
      return { ...state, selectedWorkspace: action.payload, selectedAdmin: null };
    default:
      return state;
  }
};

export default reducer;
