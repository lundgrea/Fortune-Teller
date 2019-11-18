import { combineReducers } from 'redux';
import { errorsReducer } from './errors'
import { loadingReducer } from './loading'
import { responseReducer } from './response'

const rootReducer = combineReducers({
 hasErrored: errorsReducer,
 isLoading: loadingReducer,
 response: responseReducer
});

export default rootReducer;