import classes from './footer.module.scss';
import logo from './../../assets/logo.png';

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
                <a className={classes.footer__link} href="#">
                  +7(888) 888-88-88
                </a>
              </li>
              <li className={classes.footer__item}>
                <a className={classes.footer__link} href="#">
                  +7(888) 888-88-88
                </a>
              </li>
              <li className={classes.footer__item}>
                <a className={classes.footer__link} href="#">
                  ул. Карла Маркса, 13Ак3, Ульяновск, Ульяновская обл., 432071
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.footer__bot}>
            <ul className={classes.footer__list}>
              <li className={classes.footer__item}>
                <a className={classes.footer__link} href="/about">
                  О нас
                </a>
              </li>
              <li className={classes.footer__item}>
                <a className={classes.footer__link} href="/paymontinfo">
                  Оплата
                </a>
              </li>
              <li className={classes.footer__item}>
                <a className={classes.footer__link} href="/delivery">
                  Доставка
                </a>
              </li>
              <li className={classes.footer__item}>
                <a className={classes.footer__link} href="/contacts">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
