import {
    ADD_GOAL, 
    EDIT_GOAL,
    DELETE_GOAL,
    FILTERS_FORM_CHANGE
} from '../actionTypes'

const initialState = {
  goals: [], 
  filtersForm: {
    search: ''
  }
}

export function goalsReducer(state = initialState, action) {
  switch(action.type){
    case ADD_GOAL:
      return {
      ...state, 
       goals: [...state.goals, action.goal]
      }
    case EDIT_GOAL:
      return  {
        ...state, 
        goals: [state.goals.map(goal => goal.id === action.goal.id ? action.goal : goal)]
      }
    case DELETE_GOAL:
      return {
        ...state, 
        goals: [state.goals.filter(goal => goal.id !== action.goalId)]
      }
    case FILTERS_FORM_CHANGE:
      return {...state, filtersForm: {
        ...state.filtersForm, [action.payload.name]: action.payload.value
      }}
      default:
      return state
  }
}