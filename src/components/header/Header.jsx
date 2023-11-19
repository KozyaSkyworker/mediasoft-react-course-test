import classes from './header.module.scss';
import logo from './../../assets/logo.png';
import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import { IoMdSearch, IoMdHome } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__top}>
          <Link className={classes.header__logo} to="/shop/">
            <img src={logo} alt="logo" height={20} />
          </Link>
          <ul className={classes.header__list}>
            <li className={classes.header__item}>
              {/* <input type="text" placeholder="Поиск" /> */}
              <IoMdSearch />
            </li>
            <li className={classes.header__item}>
              <Link to="/shop/favorites">
                Отложенные
                <MdFavorite />
              </Link>
            </li>

            <li className={classes.header__item}>
              <Link to="/shop/cart">
                Корзина
                <FaCartShopping />
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
                <Link className={classes.menu__link} to="/shop/">
                  Главная <IoMdHome />
                </Link>
              </li>
              <li className={classes.menu__item}>
                <Link className={classes.menu__link} to="/shop/cart">
                  Корзина <FaCartShopping />
                </Link>
              </li>
              <li className={classes.menu__item}>
                <Link className={classes.menu__link} to="/shop/favorites">
                  Отложенные <MdFavorite />
                </Link>
              </li>
              <li className={classes.menu__item}>
                <Link className={classes.menu__link} to="/shop/info">
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
          <span className="header__phone">+7(888) 888-88-88</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
