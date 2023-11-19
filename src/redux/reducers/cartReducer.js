const initialValue = {
  items: [],
};

const ADD_ITEM = 'ADD_ITEM';
const ADD_ITEMS = 'ADD_ITEMS';
const DELETE_ITEM = 'DELETE_ITEM';
const CLEAR_ITEMS = 'CLEAR_ITEMS';

export const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case ADD_ITEMS:
      return { ...state, items: [...state.items, ...action.payload] };
    case DELETE_ITEM:
      return { ...state, items: state.items.filter((itm) => itm.id !== action.payload) };
    case CLEAR_ITEMS:
      return { items: action.payload };
    default:
      return state;
  }
};

export const addItemAction = (payload) => ({ type: ADD_ITEM, payload });
export const addItemsAction = (payload) => ({ type: ADD_ITEMS, payload });
export const deleteItemAction = (payload) => ({ type: DELETE_ITEM, payload });
export const clearItemsAction = (payload) => ({ type: CLEAR_ITEMS, payload });
