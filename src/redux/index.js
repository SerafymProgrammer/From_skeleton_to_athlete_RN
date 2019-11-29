import {combineReducers} from 'redux';
import sheduleReducer from './reducers/sheduleReducer';

const rootReducer = combineReducers({
  sheduleReducer,
});

export default rootReducer;
