import { applyMiddleware, combineReducers, createStore } from 'redux';
import { filtersReducer } from './reducers/filtersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  category: filtersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
