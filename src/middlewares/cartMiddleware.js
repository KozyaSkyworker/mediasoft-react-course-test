import {
  addItemAction,
  addItemsAction,
  clearItemsAction,
  decrementItemQuantityAction,
  deleteItemAction,
  incrementItemQuantityAction,
} from '../redux/reducers/cartReducer';

export const addProductToCart = (obj) => {
  return (dispatch, getState) => {
    console.log('BEFORE CART ADD PRODUCT: ', getState());
    const cartHadObject = getState().cartItems.items.find((itm) => itm.id === obj.id);
    if (cartHadObject) {
      dispatch(incrementItemQuantityAction({ id: cartHadObject.id, count: obj.quantity }));
    } else {
      dispatch(addItemAction(obj));
    }

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
    dispatch(deleteItemAction(obj.id));
    console.log('AFTER CART DELETE PRODUCT: ', getState());
  };
};

export const clearCart = (emptyArray) => {
  return (dispatch, getState) => {
    console.log('BEFORE CART CLEAR: ', getState());
    dispatch(clearItemsAction(emptyArray));
    console.log('AFTER CART CLEAR: ', getState());
  };
};

export const incrementProductQuantity = (obj) => {
  return (dispatch, getState) => {
    console.log('BEFORE CART INCREMENT PRODUCT QUANTITY: ', getState());
    dispatch(incrementItemQuantityAction({ id: obj.id, count: 1 }));
    console.log('AFTER CART DECREMENT PRODUCT QUANTITY: ', getState());
  };
};
export const decrementProductQuantity = (obj) => {
  return (dispatch, getState) => {
    console.log('BEFORE CART INCREMENT PRODUCT QUANTITY: ', getState());
    dispatch(decrementItemQuantityAction(obj.id));
    console.log('AFTER CART DECREMENT PRODUCT QUANTITY: ', getState());
  };
};
