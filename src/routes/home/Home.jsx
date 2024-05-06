import classes from './home.module.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../services/fetchProducts';

import Product from '../../components/product/Product';
import Sidebar from '../../components/sidebar/Sidebar';
import Sort from '../../components/sort/Sort';
import ProductsSkeleton from '../../components/skeletons/productsSkeleton';
import { setIsLoading } from '../../redux/reducers/productsReducer';

const Home = () => {
  const dispatch = useDispatch();

  const currentCategory = useSelector((state) => state.filters.currentCategory);
  const currentSort = useSelector((state) => state.filters.currentSort);
  const products = useSelector((state) => state.data.products);
  const isLoading = useSelector((state) => state.data.isLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    // в API для получения всех пустое значение передать нужно
    const category = currentCategory === 'All' ? '' : currentCategory;
    // limit=9&page=1&
    dispatch(fetchProducts(category, currentSort));
  }, [currentCategory, currentSort]);

  return (
    <div className={classes.home}>
      <h1>Каталог товаров</h1>
      <div className={classes.content}>
        <Sidebar />
        <section className={classes.products}>
          <Sort />
          <div className={classes.products__wrapper}>
            {isLoading
              ? [...new Array(3)].map((_, index) => {
                  return <ProductsSkeleton key={index} />;
                })
              : products.map((prod) => {
                  return <Product key={prod.id} {...prod} />;
                })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
