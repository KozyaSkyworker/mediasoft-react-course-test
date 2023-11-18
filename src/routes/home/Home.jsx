import './aside.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Product from '../../components/product/Product';

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
      <h1>Home</h1>
      <div className="box">
        <aside className="aside">aside</aside>
        <section className="content">
          <div className="content__inner">
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
