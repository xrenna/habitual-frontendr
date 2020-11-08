import {
    ADD_GOAL, 
    EDIT_GOAL,
    DELETE_GOAL
} from '../actionTypes'

const initialState = []

export function goalsReducer(state = initialState, action) {
  switch(action.type){
    case ADD_GOAL:
      return [...state, action.goal]
    case EDIT_GOAL:
      return state.map(goal => goal.id === action.goal.id ? action.goal : goal)
    case DELETE_GOAL:
      return state.filter(goal => goal.id !== action.goalId)
      default:
      return state
  }
}