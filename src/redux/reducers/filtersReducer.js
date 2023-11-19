const initialValue = {
  currentCategory: 'All',
  currentSort: {
    name: 'По рейтингу',
    sortyBy: 'rating',
    order: 'desc',
  },
};

const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
const SET_CURRENT_SORT = 'SET_CURRENT_SORT';

export const filtersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case SET_CURRENT_SORT:
      return { ...state, currentSort: action.payload };
    default:
      return state;
  }
};

export const setCurrentCategoryAction = (payload) => ({ type: SET_CURRENT_CATEGORY, payload });
export const setCurrentSortAction = (payload) => ({ type: SET_CURRENT_SORT, payload });
