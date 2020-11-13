import {
    ADD_GOAL, 
    EDIT_GOAL,
    DELETE_GOAL
} from '../actionTypes'

import { getCurrentUser } from './currentUser'

const URL = 'http://localhost:3000/api/v1/goals'

export function addGoal(name) {
    return dispatch => {
        return fetch(URL, {
            credentials: "include",
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(name),
          })
          .then(response => response.json())
          .then(goal => {
            if (goal.error) {
              alert(goal.error)
            } else {
              dispatch({
                type: ADD_GOAL, 
                goal
              })
              dispatch(getCurrentUser())
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        }
}

export function editGoal(goal) {
  return dispatch => {
    return fetch(`${URL}/${goal.id}`, {
      credentials: "include",
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(goal),
    })
    .then(response => response.json())
    .then(goal => {
      if (goal.error) {
        alert(goal.error)
      } else {
        dispatch({
          type: EDIT_GOAL, 
          goal
        })
        dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export function deleteSighting(goalId) {
  return (dispatch) => {
    return  fetch(`${URL}/${goalId}`, {
      credentials: "include",
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => {
      dispatch({
      type: DELETE_GOAL,
      goalId
      })
      dispatch(getCurrentUser())
    })
  }
}
