import classes from './header.module.scss';
import logo from './../../assets/logo.png';
import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import { IoMdHome } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartProducts = useSelector((state) => state.cartItems.items);
  const productsQuantity = cartProducts.reduce((count, current) => {
    return count + current.quantity;
  }, 0);

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__top}>
          <Link className={classes.header__logo} to="/shop/">
            <img src={logo} alt="logo" height={20} />
          </Link>
          <ul className={classes.header__list}>
            <li className={classes.header__item}>
              <Link to="/shop/cart">
                Корзина
                <FaCartShopping />
                <span> ({productsQuantity})</span>
              </Link>
            </li>
          </ul>
          {/* бургер для значка навигации маленького экрана */}
          <button className={classes.header__burger} onClick={() => setIsMenuOpen(true)}>
            <span></span>
          </button>

          {/* навигация на маленьком экране */}
          <div className={`${classes.menu} ${isMenuOpen ? classes.menu_open : ''}`}>
            <ul className={`${classes.header__menu} ${classes.menu__list}`}>
              <IoClose onClick={() => setIsMenuOpen(false)} />
              <li className={classes.menu__item}>
                <Link
                  className={classes.menu__link}
                  to="/shop/"
                  onClick={() => setIsMenuOpen(false)}>
                  Главная <IoMdHome />
                </Link>
              </li>
              <li className={classes.menu__item}>
                <Link
                  className={classes.menu__link}
                  to="/shop/cart"
                  onClick={() => setIsMenuOpen(false)}>
                  Корзина <FaCartShopping />
                </Link>
              </li>
              <li className={classes.menu__item}>
                <Link
                  className={classes.menu__link}
                  to="/shop/info"
                  onClick={() => setIsMenuOpen(false)}>
                  Основная информация
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.header__bot}>
          <nav className={classes.header__navigation}>
            <ul className={classes.header__list}>
              <li className={classes.header__item}>
                <Link className={classes.header__link} to="/shop/info">
                  Основная информация
                </Link>
              </li>
            </ul>
          </nav>
          <a className="header__phone" href="tel:+7(888) 888-88-88">
            +7(888) 888-88-88
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
