import classes from './sidebar.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategoryAction } from '../../redux/reducers/filtersReducer';

const Sidebar = () => {
  const [tabs, setTabs] = useState(['All']);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.filters.currentCategory);

  useEffect(() => {
    axios
      .get(`https://630244f2c6dda4f287b6a17b.mockapi.io/products`)
      .then((data) => {
        let categories = Array.from(
          new Set(
            data.data.map((element) => {
              return element.category;
            }),
          ),
        );
        categories = [...tabs, ...categories];
        setTabs(categories);
      })
      .then(() => setIsLoading(false));
  }, []);

  return (
    <div className={classes.sidebar}>
      <h3>Категории товаров</h3>
      <ul className={classes.sidebar__list}>
        {isLoading ? (
          <p>loading</p>
        ) : (
          tabs.map((tab) => {
            return (
              <li
                className={`${classes.sidebar__item} ${
                  tab === currentCategory ? classes.sidebar__item_active : ''
                }`}
                key={tab}
                onClick={() => {
                  // let tempCategory = tab === 'All' ? '' : tab;
                  dispatch(setCurrentCategoryAction(tab));
                }}>
                {tab}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
