const initialValue = {
  currentCategory: 'All',
};

const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

export const filtersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return { currentCategory: action.payload };
    default:
      return state;
  }
};

export const setCurrentCategoryAction = (payload) => ({ type: SET_CURRENT_CATEGORY, payload });
