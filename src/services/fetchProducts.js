import axios from 'axios';
import { addProductsAction } from '../redux/reducers/productsReducer';

export const fetchProducts = (category) => {
  return async (dispatch, getState) => {
    console.log('BEFORE: ', getState());
    const response = await axios.get(
      `https://630244f2c6dda4f287b6a17b.mockapi.io/products?category=${category}`,
    );
    dispatch(addProductsAction({ data: response.data, loading: false }));
    console.log('AFTER: ', getState());
  };
};