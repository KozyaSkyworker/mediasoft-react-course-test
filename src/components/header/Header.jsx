import classes from './header.module.scss';
import logo from './../../assets/logo.png';
import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__top}>
          <a className={classes.header__logo} href="/">
            <img src={logo} alt="logo" height={20} />
          </a>
          <ul className={classes.header__list}>
            <li className={classes.header__item}>
              {/* <input type="text" placeholder="Поиск" /> */}
              <IoMdSearch />
            </li>
            <li className={classes.header__item}>
              <a href="/favorites">
                Отложенные
                <MdFavorite />
              </a>
            </li>

            <li className={classes.header__item}>
              <a href="/cart">
                Корзина
                <FaCartShopping />
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.header__bot}>
          <nav className={classes.header__navigation}>
            <ul className={classes.header__list}>
              <li className={classes.header__item}>
                <a className={classes.header__link} href="/about">
                  О нас
                </a>
              </li>
              <li className={classes.header__item}>
                <a className={classes.header__link} href="/paymontinfo">
                  Оплата
                </a>
              </li>
              <li className={classes.header__item}>
                <a className={classes.header__link} href="/delivery">
                  Доставка
                </a>
              </li>
              <li className={classes.header__item}>
                <a className={classes.header__link} href="/contacts">
                  Контакты
                </a>
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
