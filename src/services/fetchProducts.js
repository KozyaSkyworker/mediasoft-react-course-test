import axios from 'axios';
import { addProductsAction } from '../redux/reducers/productsReducer';
import { addSingleProductAction } from '../redux/reducers/singleProductReducer';

export const fetchProducts = (category, sort) => {
  return async (dispatch, getState) => {
    console.log('BEFORE FETCHING all: ', getState());
    console.log(
      '\nrequest URL',
      `https://630244f2c6dda4f287b6a17b.mockapi.io/products?sortBy=${sort.sortBy}&order=${sort.order}&category=${category}`,
      '\n\n',
    );
    const response = await axios.get(
      `https://630244f2c6dda4f287b6a17b.mockapi.io/products?sortBy=${sort.sortBy}&order=${sort.order}&category=${category}`,
    );
    dispatch(addProductsAction({ data: response.data, loading: false }));
    console.log('AFTER FETCHING all: ', getState());
  };
};

export const fetchSingleProduct = (productId) => {
  return async (dispatch, getState) => {
    console.log('BEFORE FETCHING single PRODUCT: ', getState());
    const response = await axios.get(
      `https://630244f2c6dda4f287b6a17b.mockapi.io/products/${productId}`,
    );
    dispatch(addSingleProductAction({ data: response.data, loading: false }));
    console.log('AFTER FETCHING single PRODUCT: ', getState());
  };
};
