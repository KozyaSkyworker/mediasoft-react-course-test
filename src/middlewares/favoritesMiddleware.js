import {
  addFavoritesItemAction,
  deleteFavoritesItemAction,
} from '../redux/reducers/favoritesReduces';

export const toggleFavoritesItem = (id) => {
  return (dispatch, getState) => {
    console.log('BEFORE FAVORITES TOGGLE PRODUCT: ', getState());
    if (getState().favorites.items.indexOf(id) >= 0) {
      dispatch(deleteFavoritesItemAction(id));
    } else {
      dispatch(addFavoritesItemAction(id));
    }

    console.log('AFTER FAVORITES TOGGLE PRODUCT: ', getState());
  };
};
