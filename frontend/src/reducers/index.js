import { combineReducers } from 'redux';
import discussion from './discussion';
import page from './page';

const discussionApp = combineReducers({discussion, page});

export default discussionApp;
