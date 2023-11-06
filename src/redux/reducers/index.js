const initialState = {
  jobs: {
    content: [], //array dei lavori trovati
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    default:
      return state;
  }
};

export default mainReducer;
