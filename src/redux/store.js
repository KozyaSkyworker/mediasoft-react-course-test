import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { filtersReducer } from './reducers/filtersReducer';
import { productsReducer } from './reducers/productsReducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  data: productsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
