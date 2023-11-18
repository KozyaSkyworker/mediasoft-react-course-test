import classes from './home.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Product from '../../components/product/Product';
import Sidebar from '../../components/sidebar/Sidebar';
import Sort from '../../components/sort/Sort';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=9')
      .then((data) => setProducts(data.data.products))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Каталог товаров</h1>
      <div className={classes.content}>
        <Sidebar />
        <section className={classes.products}>
          <Sort />
          <div className={classes.products__wrapper}>
            {isLoading ? (
              <p>Идёт Загрузка. жди</p>
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
