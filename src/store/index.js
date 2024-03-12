import { createStore, combineReducers, applyMiddleware } from 'redux';
const thunkMiddleware = require('redux-thunk').thunk
import userReducer from './reducers/users'; // Assuming this is your user reducer
import logger from 'redux-logger'


const rootReducer = combineReducers({
  user: userReducer // Use 'user' as the key, not the reducer name
});


export const Store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default Store;
