import classes from './cart.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { FaTrash } from 'react-icons/fa';
import {
  clearCart,
  decrementProductQuantity,
  deleteProductFromCart,
  incrementProductQuantity,
} from '../../middlewares/cartMiddleware';
import { useMemo } from 'react';

const Cart = () => {
  console.log('CART rerender');
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cartItems.items);

  const totalQuantity = items.reduce((sum, current) => {
    return sum + current.quantity;
  }, 0);
  const totalPrice = items.reduce((sum, current) => {
    return sum + current.pricePerOne * current.quantity;
  }, 0);

  return (
    <div className={classes.cart}>
      <h1 className={classes.cart__title}>Корзина</h1>
      <div className={classes.cart__top}>
        <button
          className={classes.cart__clear}
          onClick={() => {
            dispatch(clearCart([]));
          }}>
          Очистить корзину
        </button>
      </div>
      <div className={classes.cart__wrapper}>
        {items.length > 0 ? (
          <>
            <div className={classes.cart__items}>
              {items.map((itm) => {
                return (
                  <div className={classes.cart__item} key={itm.id}>
                    {/* <img className={classes.cart__img} src={itm.thumbnail} alt="фотография" /> */}
                    <div className={classes.cart__fakeimg}>(картинки сломались :) )</div>
                    <div className={classes.cart__text}>
                      <span className={classes.cart__title}>{itm.title}</span>
                      <div className={classes.cart__btns}>
                        <span className={classes.cart__quantity}>
                          Количество тв. {itm.quantity}
                        </span>
                        <div className={classes.cart__ctrl}>
                          <button
                            disabled={itm.quantity === 1 ? true : false}
                            onClick={() => {
                              dispatch(decrementProductQuantity(itm));
                            }}>
                            -
                          </button>
                          |
                          <button
                            onClick={() => {
                              dispatch(incrementProductQuantity(itm));
                            }}>
                            +
                          </button>
                        </div>
                      </div>
                      <span className={classes.cart__price}>
                        {itm.pricePerOne * itm.quantity} $
                      </span>
                      <button
                        className={classes.cart__delete}
                        onClick={() => {
                          dispatch(deleteProductFromCart(itm));
                        }}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={classes.cart__amount}>
              <p>
                В корзине <span>{totalQuantity}</span> тв. на сумму <span>{totalPrice}</span> $
              </p>
            </div>
          </>
        ) : (
          <p className={classes.cart__empty}>Ваша корзина пуста</p>
        )}
      </div>
      <div className={classes.cart__bot}>
        <button>Заказать</button>
      </div>
    </div>
  );
};

export default Cart;
