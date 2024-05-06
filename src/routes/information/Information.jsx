import { useEffect } from 'react';
import classes from './information.module.scss';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

const Information = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // куки неправильно работают :(
  const [cookies, setCookies] = useCookies(['form']);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setCookies('form', formData, { path: '/mediasoft-react-course-test/info' });
  };

  useEffect(() => {
    if (cookies.form == undefined) {
      setCookies('form', formData, { path: '/mediasoft-react-course-test/info' });
    } else {
      setFormData(cookies.form);
    }
  }, []);

  return (
    <div className={classes.information}>
      <h1>Основные положения</h1>
      <section className="about">
        <h2>О нас</h2>
        <p>
          Мы рады предложить вам недорогие, но качественные товары с подробными описаниями,
          характеристиками и фотографиями. У нас Вы можете купить замечательные товары: технику,
          электронику, одежду, обувь, игрушки, книги и многое другое в вашем регионе по ценам
          производителей и без наценки. Продажа большого ассортимента разнообразных товаров –
          основная специализация нашего интернет-магазина. Мы доставим ваш заказ бесплатно в любой
          уголок мира, осуществим подробную консультацию по товарам и поможем с выбором. Магазин
          "MyShop.ru" предлагает Вам купить качественную и доступную технику, электронику, одежду,
          обувь, игрушки, книги и многое другое с доставкой! Все виды современных товаров от эконом
          класса до более дорогих представлены в нашем каталоге. Вы можете купить любые товары в
          вашем городе: технику, электронику, одежду, обувь, игрушки, книги и многое другое.
        </p>
      </section>
      <section className="contacts">
        <h2>Контакты</h2>
        <p>
          Вы можете найти нас по адресу: г. Москва, ул. Торговая, дом 123, офис 456 Как добраться:
          Сокольническая линия метро, последний вагон из центра, выход в сторону Казанского вокзала.
          Телефон отдела продаж: 8-495-123-45-67 (многоканальный) Телефон отдела оптовых продаж:
          8-495-765-43-21 Email: sales@myshop.ru График работы офиса и склада: Понедельник с 9:00 до
          21:00 Вторник с 9:00 до 21:00 Среда с 9:00 до 21:00 Четверг с 9:00 до 21:00 Пятница с 9:00
          до 21:00 Суббота с 10:00 до 20:00 Воскресенье с 10:00 до 20:00
        </p>
      </section>
      <section className="feedback">
        <h2>Обратная связь</h2>
        <form className={classes.information__form}>
          <label>
            Введите Ваше
            <br />
            <input
              className={classes.information__inpt}
              type="text"
              placeholder="Как к Вам обращаться?"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Введите Ваш адресс электронной почты
            <br />
            <input
              className={classes.information__inpt}
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Введите Ваш номер телефона
            <br />
            <input
              className={classes.information__inpt}
              type="tel"
              placeholder="8 (999) 999-99-99"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Введите Ваше сообщение
            <br />
            <textarea
              className={classes.information__textarea}
              id=""
              cols="30"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required></textarea>
          </label>

          <button className={classes.information__btn}>Отправить</button>
        </form>
      </section>
    </div>
  );
};

export default Information;
