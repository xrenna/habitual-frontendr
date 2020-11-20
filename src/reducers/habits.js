import {
    ADD_HABIT, 
    EDIT_HABIT,
    DELETE_HABIT
} from '../actionTypes'

const initialState = []

export function habitsReducer(state = initialState, action) {
  switch(action.type){
    case ADD_HABIT:
      return [...state, action.habit]
    case EDIT_HABIT:
      return state.map(habit => habit.id === action.habit.id ? action.habit : habit)
    case DELETE_HABIT:
      return state.filter(habit => habit.id !== action.habitId)
      default:
      return state
  }
}