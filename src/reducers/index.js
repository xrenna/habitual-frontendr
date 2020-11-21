import { currentUserReducer } from './currentUser'
import { goalsReducer } from './goals'
import { habitsReducer } from './habits'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    goals: goalsReducer,
    habits: habitsReducer
 })
  
  export default rootReducer