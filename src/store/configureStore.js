import { createStore } from 'redux';
import rootReducer from "../reducers/test"

const store = createStore(rootReducer);

export default store;