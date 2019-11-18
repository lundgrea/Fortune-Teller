import { combineReducers } from 'redux';
import { errorsReducer } from './errors'
import { loadingReducer } from './loading'
import { responseReducer } from './response'
import { resultsReducer } from './results'

const rootReducer = combineReducers({
 hasErrored: errorsReducer,
 isLoading: loadingReducer,
 response: responseReducer,
 results: resultsReducer
});

export default rootReducer;