const initialValue = {
  products: [],
};

const ADD_PRODUCTS = 'ADD_PRODUCTS';

export const filtersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { products: action.payload };
    default:
      return state;
  }
};

export const addProductsAction = (payload) => ({ type: ADD_PRODUCTS, payload });
