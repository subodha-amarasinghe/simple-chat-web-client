import { combineReducers } from 'redux';
import authReducer from './authReducer';
import activeUsersReducer from './activeUsersReducer'

const reducers = combineReducers({
    user: authReducer,
    activeUsers: activeUsersReducer
});

export default reducers;