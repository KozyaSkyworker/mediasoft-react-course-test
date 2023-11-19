const initialValue = {
  product: {},
  isLoading: true,
};

const ADD_SINGLE_PRODUCT = 'ADD_SINGLE_PRODUCT';
const SET_IS_LOADING_SINGLE_PRODUCT = 'SET_IS_LOADING_SINGLE_PRODUCT';

export const singleProductReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_SINGLE_PRODUCT:
      return { ...state, product: action.payload.data, isLoading: action.payload.loading };
    case SET_IS_LOADING_SINGLE_PRODUCT:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const addSingleProductAction = (payload) => ({ type: ADD_SINGLE_PRODUCT, payload });
export const setIsLoadingSingleProductAction = (payload) => ({
  type: SET_IS_LOADING_SINGLE_PRODUCT,
  payload,
});
