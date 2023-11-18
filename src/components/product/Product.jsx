import classes from './product.module.scss';

import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';

const Product = ({ title, price, rating, brand, category, thumbnail }) => {
  return (
    <div className={classes.product}>
      <img className={classes.product__img} src={thumbnail} width={100} alt="" />
      <p className={classes.product__title}>{title}</p>
      <div className={classes.product__bot}>
        <p>
          <span>{price}</span> $
        </p>
        <button>
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
