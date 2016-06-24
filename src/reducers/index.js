import { combineReducers } from 'redux';

import PostsReducers from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducers
});

export default rootReducer;
