const initialValue = {
  favItems: [],
};

const ADD_ITEM_FAV = 'ADD_ITEM_FAV';
const DELETE_ITEM = 'DELETE_ITEM';

export const favoritesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_ITEM_FAV:
      return { ...state, favItems: [...state.favItems, action.payload] };

    case DELETE_ITEM:
      return { ...state, favItems: state.favItems.filter((itm) => itm !== action.payload) };

    default:
      return state;
  }
};

export const addFavoritesItemAction = (payload) => ({ type: ADD_ITEM_FAV, payload });
export const deleteFavoritesItemAction = (payload) => ({ type: DELETE_ITEM, payload });
