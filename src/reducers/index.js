import { combineReducers } from 'redux';
import MatchReducer from './MatchReducer';

const rootReducer = combineReducers({
    match: MatchReducer
});

export default rootReducer;