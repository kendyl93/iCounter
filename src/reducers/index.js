import {combineReducers} from 'redux';
import reducerBarca from './reducerBarca'
import reducerCounter from './reducerCounter'

const rootReducer = combineReducers({
  players: reducerBarca,
  counter: reducerCounter
});

export default rootReducer;
