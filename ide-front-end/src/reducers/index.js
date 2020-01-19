import { combineReducers } from 'redux';
import openFilesReducer from './open-files';


export default combineReducers({
    openFiles: openFilesReducer
});