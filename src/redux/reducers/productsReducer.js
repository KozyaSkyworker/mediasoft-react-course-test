const initialValue = {
  products: [],
  isLoading: true,
};

const ADD_PRODUCTS = 'ADD_PRODUCTS';
const SET_IS_LOADING = 'SET_IS_LOADING';

export const productsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: action.payload.data, isLoading: action.payload.loading };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export const addProductsAction = (payload) => ({ type: ADD_PRODUCTS, payload });
export const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload });
