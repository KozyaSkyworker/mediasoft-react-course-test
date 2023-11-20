// --- СТРАНИЦА ТОВАРА --- //
import classes from './detailed.module.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../services/fetchProducts';
import { setIsLoadingSingleProductAction } from '../../redux/reducers/singleProductReducer';
import ProductsSkeleton from '../../components/skeletons/productsSkeleton';
import { addProductToCart } from '../../middlewares/cartMiddleware';
import { FaStar } from 'react-icons/fa';

const Detailed = () => {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const { productId } = useParams();

  const { id, title, description, price, rating, brand, thumbnail, images } = useSelector(
    (state) => state.product.product,
  );
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(setIsLoadingSingleProductAction(true));
    // можно без нового запроса, а просто фильтровать имеющиеся
    dispatch(fetchSingleProduct(productId));
  }, []);

  return (
    <div className={classes.product}>
      <div className={classes.product__images}>
        <div className={classes.product__wrapper}>
          {isLoading
            ? [...new Array(3)].map((_, index) => {
                return <ProductsSkeleton key={index} />;
              })
            : images.map((img, index) => {
                return <img src={img} key={index} alt="фотография" />;
              })}
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
            <p>
              Сколько штук добавить в корзину?{' '}
              <input
                className={classes.product__count}
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </p>
            <button
              onClick={() => {
                const newCartItem = {
                  id,
                  title,
                  thumbnail,
                  pricePerOne: price,
                  quantity: Number(count),
                };
                dispatch(addProductToCart(newCartItem));
              }}>
              Добавить в корзину
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Detailed;
