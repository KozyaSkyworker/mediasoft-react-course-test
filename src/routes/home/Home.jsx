import classes from './home.module.scss';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Product from '../../components/product/Product';
import Sidebar from '../../components/sidebar/Sidebar';
import Sort from '../../components/sort/Sort';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const currentCategory = useSelector((state) => state.category.currentCategory);

  useEffect(() => {
    setIsLoading(true);
    // в API для получения всех пустое значение передать нужно
    const category = currentCategory === 'All' ? '' : currentCategory;
    // limit=9&page=1&
    axios
      .get(`https://630244f2c6dda4f287b6a17b.mockapi.io/products?category=${category}`)
      .then((data) => setProducts(data.data))
      .then(() => setIsLoading(false));
  }, [currentCategory]);

  return (
    <>
      <h1>Каталог товаров</h1>
      <div className={classes.content}>
        <Sidebar />
        <section className={classes.products}>
          <Sort />
          <div className={classes.products__wrapper}>
            {isLoading ? (
              <p>Подождите, пожалуйста, идёт загрузка...</p>
            ) : (
              products.map((prod) => {
                return <Product key={prod.id} {...prod} />;
              })
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
