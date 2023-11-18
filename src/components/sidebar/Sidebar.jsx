import classes from './sidebar.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/categories`).then((data) => setTabs(data.data));
  }, []);

  return (
    <div className={classes.sidebar}>
      <h3>Категории товаров</h3>
      <ul className={classes.sidebar__list}>
        {tabs.map((tab) => {
          return (
            <li className={classes.sidebar__item} key={tab}>
              {tab}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
