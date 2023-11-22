import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { filtersReducer } from './reducers/filtersReducer';
import { productsReducer } from './reducers/productsReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';
import { favoritesReducer } from './reducers/favoritesReduces';

const rootReducer = combineReducers({
  filters: filtersReducer,
  data: productsReducer,
  product: singleProductReducer,
  cartItems: cartReducer,
  favorites: favoritesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
