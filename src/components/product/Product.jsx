import classes from './product.module.scss';

import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemAction } from '../../redux/reducers/cartReducer';
import { addProductToCart } from '../../middlewares/cartMiddleware';

const Product = ({ id, title, price, thumbnail }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.product}>
      <Link to={`/shop/products/${id}`} className={classes.product__link}>
        <img className={classes.product__img} src={thumbnail} width={100} alt={title} />

        <p className={classes.product__title}>{title}</p>
      </Link>
      <div className={classes.product__bot}>
        <p>
          <span>{price}</span> $
        </p>
        <button
          onClick={() => {
            dispatch(addProductToCart({ id, title, thumbnail, pricePerOne: price, quantity: 1 }));
          }}>
          {' '}
          <FaCartShopping />
        </button>
        <button className={classes.product__favorites}>
          <MdFavorite />
        </button>
      </div>
    </div>
  );
};

export default Product;
