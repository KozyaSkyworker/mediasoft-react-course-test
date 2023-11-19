import classes from './product.module.scss';

import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Product = ({ id, title, price, thumbnail }) => {
  return (
    <div className={classes.product}>
      <Link to={`/shop/products/${id}`} className={classes.product__link}>
        <img className={classes.product__img} src={thumbnail} width={100} alt="" />

        <p className={classes.product__title}>{title}</p>
      </Link>
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
