import classes from './sort.module.scss';

import { useRef, useState, useEffect } from 'react';

import { TbArrowsSort } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSortAction } from '../../redux/reducers/filtersReducer';

const sortItems = [
  {
    name: 'По рейтингу',
    sortBy: 'rating',
    order: 'desc',
  },
  {
    name: 'По убыванию цены',
    sortBy: 'price',
    order: 'desc',
  },
  {
    name: 'По возрастанию цены',
    sortBy: 'price',
    order: 'asc',
  },
  {
    name: 'По названию',
    sortBy: 'title',
    order: 'desc',
  },
];

const Sort = () => {
  const sortBlock = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const dispatch = useDispatch();
  const currentSort = useSelector((state) => state.filters.currentSort);

  // useEffect(() => {
  //   const handleClick = (event) => {
  //     console.log(event);
  //   };

  //   document.body.addEventListener('click', handleClick);

  //   return () => document.body.removeEventListener('click', handleClick);
  // }, []);

  return (
    <div className={classes.sort} ref={sortBlock}>
      <div
        className={classes.sort__clickable}
        onClick={() => {
          setIsPopupOpen(true);
        }}>
        <TbArrowsSort />
        <span className={`${classes.sort__selected} ${classes.sort__selected_active}`}>
          {currentSort.name}
        </span>
      </div>
      {isPopupOpen && (
        <ul className={classes.sort__list}>
          {sortItems.map((sortItem) => {
            return (
              <li
                className={`${classes.sort__item} ${
                  sortItem.name === currentSort.name ? classes.sort__item_active : ''
                }`}
                key={sortItem.name}
                onClick={() => {
                  dispatch(setCurrentSortAction(sortItem));
                  setIsPopupOpen(false);
                }}>
                <span>{sortItem.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sort;
