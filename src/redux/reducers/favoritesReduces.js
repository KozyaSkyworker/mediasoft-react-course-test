const initialValue = {
  items: [],
};

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const favoritesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };

    case DELETE_ITEM:
      return { ...state, items: state.items.filter((itm) => itm !== action.payload) };

    default:
      return state;
  }
};

export const addFavoritesItemAction = (payload) => ({ type: ADD_ITEM, payload });
export const deleteFavoritesItemAction = (payload) => ({ type: DELETE_ITEM, payload });
