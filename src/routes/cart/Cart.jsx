import classes from './cart.module.scss';

import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  // получить айтемы корзины

  // эктионы: удаление всех, одного, изменения кол-ва

  return (
    <div className={classes.cart}>
      <h1 className={classes.cart__title}>Корзина</h1>
      <div className={classes.cart__top}>
        <button className={classes.cart__clear}>Очистить корзину</button>
      </div>
      <div className={classes.cart__wrapper}>
        <div className={classes.cart__items}>
          <div className={classes.cart__item}>
            <img className={classes.cart__img} src="" alt="фотография" />
            <span className={classes.cart__title}>title</span>
            <span className={classes.cart__ctrl}>-|+</span>
            <span className={classes.cart__price}>price</span>
            <button className={classes.cart__delete}>
              <FaTrash />
            </button>
          </div>
        </div>
        <div className={classes.cart__amount}>
          <p>
            В корзине <span>10</span> тв. на сумму <span>1000</span> $
          </p>
        </div>
      </div>
      <div className={classes.cart__bot}>
        <button>Заказать</button>
      </div>
    </div>
  );
};

export default Cart;
