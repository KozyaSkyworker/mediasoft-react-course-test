import classes from './footer.module.scss';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className="footer__inner">
          <div className={classes.footer__top}>
            <a className={classes.footer__logo} href="/">
              <img src={logo} alt="logo" height={20} />
            </a>
            <ul className={classes.footer__list}>
              <li className={classes.footer__item}>
                <a className={classes.footer__link} href="tel:+7(888) 888-88-88">
                  +7(888) 888-88-88
                </a>
              </li>
              <li className={classes.footer__item}>
                <a className={classes.footer__link} href="tel: +7(888) 888-88-88">
                  +7(888) 888-88-88
                </a>
              </li>
              <li className={classes.footer__item}>
                <a
                  className={classes.footer__link}
                  href="https://www.google.com/maps/search/%D1%83%D0%BB.+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0,+13%D0%90%D0%BA3,+%D0%A3%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D1%81%D0%BA,+%D0%A3%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+432071/@54.3198062,48.3935816,17z/data=!3m1!4b1?entry=ttu"
                  target="_blank">
                  ул. Карла Маркса, 13Ак3, Ульяновск, Ульяновская обл., 432071
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.footer__bot}>
            <ul className={classes.footer__list}>
              <li className={classes.footer__item}>
                <Link className={classes.footer__link} to="/shop/info">
                  Основная информация
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
