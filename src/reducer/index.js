import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import employeeFormReducer from './employeeFormReducer';
import employeeFetchReducer from './employeeFetchReducer';

export default combineReducers({
    AuthReducer: AuthReducer,
    employeeFormReducer: employeeFormReducer,
    employeeFetchReducer: employeeFetchReducer
})