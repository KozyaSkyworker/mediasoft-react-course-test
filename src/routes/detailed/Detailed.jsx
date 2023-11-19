// --- СТРАНИЦА ТОВАРА --- //
import classes from './detailed.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../services/fetchProducts';
import { setIsLoadingSingleProductAction } from '../../redux/reducers/singleProductReducer';

import { FaStar } from 'react-icons/fa';

const Detailed = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();

  const { title, description, price, rating, brand, images } = useSelector(
    (state) => state.product.product,
  );
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(setIsLoadingSingleProductAction(true));
    dispatch(fetchSingleProduct(productId));
  }, []);

  return (
    <div className={classes.product}>
      <div className={classes.product__images}>
        <div className={classes.product__wrapper}>
          {isLoading ? (
            <p>loading</p>
          ) : (
            images.map((img, index) => {
              return <img src={img} key={index} />;
            })
          )}
        </div>
      </div>
      <div className={classes.product__text}>
        {isLoading ? (
          <p>Идёт загрузка...</p>
        ) : (
          <>
            <h1>
              {title}{' '}
              <span className={classes.product__rating}>
                <FaStar /> {rating}
              </span>
            </h1>
            <h2>{brand}</h2>
            <p className={classes.product__description}>{description}</p>
            <p>
              <span className={classes.product__price}>{price}</span> $
            </p>{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default Detailed;
