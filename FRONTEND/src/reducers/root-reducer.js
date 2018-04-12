import {combineReducers} from 'redux';  
import clients from './client-reducer';

const rootReducer = combineReducers({  
  clients
})

export default rootReducer;  