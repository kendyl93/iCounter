import {combineReducers} from 'redux';
import reducerCounter from './reducerCounter'
import reducerBarca from './reducerBarca'
import reducerReal from './reducerReal'


const rootReducer = combineReducers({
  reducerCounter,
  reducerBarca,
  reducerReal,
});

export default rootReducer;
