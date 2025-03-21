import { createStore } from 'redux';
import rewardsReducer from './reducers';

const store = createStore(rewardsReducer);

export default store;