import {createStore} from 'redux';
import Reducer from './counter/reducer';

export const store = createStore(counterReducer);