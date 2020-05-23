import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reduces from '../reduces';

const store = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlware = [thunk];

export default createStore(reduces,{},store(applyMiddleware(...middlware)))

