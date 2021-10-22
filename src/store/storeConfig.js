import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import reportsReducer from './reducers/reports'

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
  reports: reportsReducer,
})

const storeConfig = () => {
  return createStore(reducers)
}

export default storeConfig