import classes from './product.module.scss';

import { useInView } from 'react-intersection-observer';
import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../middlewares/cartMiddleware';
import { toggleFavoritesItem } from '../../middlewares/favoritesMiddleware';
import { memo } from 'react';

const Product = ({ id, title, price, thumbnail }) => {
  const dispatch = useDispatch();

  console.log('1');

  const favoritesItemArray = useSelector((state) => state.favorites.items);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className={classes.product} ref={ref}>
      <Link to={`/mediasoft-react-course-test/products/${id}`} className={classes.product__link}>
        {inView ? (
          <img className={classes.product__img} src={thumbnail} width={100} alt={title} />
        ) : (
          <div className={classes.product__img_skeleton}></div>
        )}

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
        <button
          className={`${classes.product__favorites} ${
            favoritesItemArray.indexOf(id) >= 0 ? classes.product__favorites_active : ''
          }`}
          onClick={() => {
            dispatch(toggleFavoritesItem(id));
          }}>
          <MdFavorite />
        </button>
      </div>
    </div>
  );
};

export default memo(Product);
