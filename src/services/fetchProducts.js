import axios from 'axios';
import { addProductsAction } from '../redux/reducers/productsReducer';

export const fetchProducts = (category) => {
  return (dispatch) => {
    axios
      .get(`https://630244f2c6dda4f287b6a17b.mockapi.io/products?category=${category}`)
      .then((data) => dispatch(addProductsAction(data.data)));
  };
};
