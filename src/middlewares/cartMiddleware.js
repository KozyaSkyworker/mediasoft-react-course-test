import {
  addItemAction,
  addItemsAction,
  clearItemsAction,
  deleteItemAction,
} from '../redux/reducers/cartReducer';

export const addProductToCart = (obj) => {
  return (dispatch, getState) => {
    console.log('BEFORE CART ADD PRODUCT: ', getState());
    dispatch(addItemAction(obj));
    console.log('AFTER CART ADD PRODUCT: ', getState());
  };
};

export const addProductsToCart = (productsList) => {
  return (dispatch, getState) => {
    console.log('BEFORE CART ADD PRODUCTS: ', getState());
    dispatch(addItemsAction(productsList));
    console.log('AFTER CART ADD PRODUCTS: ', getState());
  };
};

export const deleteProductFromCart = (obj) => {
  return (dispatch, getState) => {
    console.log('BEFORE CART DELETE PRODUCT: ', getState());
    dispatch(deleteItemAction(obj));
    console.log('AFTER CART DELETE PRODUCT: ', getState());
  };
};

export const clearCartCart = () => {
  return (dispatch, getState) => {
    console.log('BEFORE CART CLEAR: ', getState());
    dispatch(clearItemsAction());
    console.log('AFTER CART CLEAR: ', getState());
  };
};
