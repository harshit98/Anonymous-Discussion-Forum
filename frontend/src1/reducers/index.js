import { combineReducers } from 'redux';
import list from './list';
import page from './page';

const listApp = combineReducers({list, page});

export default listApp;
