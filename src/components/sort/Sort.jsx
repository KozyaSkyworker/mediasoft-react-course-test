import classes from './sort.module.scss';

import { TbArrowsSort } from 'react-icons/tb';

const Sort = () => {
  return (
    <div className={classes.sort}>
      <TbArrowsSort />

      <ul className={classes.sort__list}>
        <li className={`${classes.sort__item} ${classes.sort__item_active}`}>По рейтингу</li>
        <li className={`${classes.sort__item}`}>По убыванию цены</li>
        <li className={`${classes.sort__item}`}>По возрастанию цены</li>
        <li className={`${classes.sort__item}`}>По названию</li>
      </ul>
    </div>
  );
};

export default Sort;
