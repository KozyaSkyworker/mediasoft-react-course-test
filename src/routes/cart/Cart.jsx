import classes from './cart.module.scss';

import { useSelector } from 'react-redux';

import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  // получить айтемы корзины
  const items = useSelector((state) => state.cartItems.items);

  // два прохода по массиву. зачем?
  const totalQuantity = items.reduce((sum, current) => {
    return sum + current.quantity;
  }, 0);
  const totalPrice = items.reduce((sum, current) => {
    return sum + current.pricePerOne * current.quantity;
  }, 0);
  // эктионы: удаление всех, одного, изменения кол-ва

  return (
    <div className={classes.cart}>
      <h1 className={classes.cart__title}>Корзина</h1>
      <div className={classes.cart__top}>
        <button className={classes.cart__clear}>Очистить корзину</button>
      </div>
      <div className={classes.cart__wrapper}>
        {items.length > 0 ? (
          <>
            <div className={classes.cart__items}>
              {items.map((itm) => {
                return (
                  <div className={classes.cart__item} key={itm.id}>
                    <img className={classes.cart__img} src={itm.thumbnail} alt="фотография" />
                    <div className={classes.cart__text}>
                      <span className={classes.cart__title}>{itm.title}</span>
                      <div className={classes.cart__btns}>
                        <span className={classes.cart__quantity}>
                          Количество тв. {itm.quantity}
                        </span>
                        <div className={classes.cart__ctrl}>
                          <button>-</button>|<button>+</button>
                        </div>
                      </div>
                      <span className={classes.cart__price}>
                        {itm.pricePerOne * itm.quantity} $
                      </span>
                      <button className={classes.cart__delete}>
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
