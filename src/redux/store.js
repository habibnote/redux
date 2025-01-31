import { createStore } from 'redux';
import rootReducer from './rootRuducer';

const store = createStore(rootReducer);

export default store;
