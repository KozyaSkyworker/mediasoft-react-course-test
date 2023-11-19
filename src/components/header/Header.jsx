import classes from './header.module.scss';
import logo from './../../assets/logo.png';
import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
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
              <Link to="/favorites">
                Отложенные
                <MdFavorite />
              </Link>
            </li>

            <li className={classes.header__item}>
              <Link to="/cart">
                Корзина
                <FaCartShopping />
              </Link>
            </li>
          </ul>
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
