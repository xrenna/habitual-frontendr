import {
    ADD_HABIT, 
    EDIT_HABIT,
    DELETE_HABIT
} from '../actionTypes'

import { getCurrentUser } from './currentUser'

const URL = 'https://habitualbackend.herokuapp.com/api/v1/habits'

export function addHabit(habit) {
    return dispatch => {
        return fetch(URL, {
            credentials: "include",
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(habit),
          })
          .then(response => response.json())
          .then(habit => {
            if (habit.error) {
              alert(habit.error)
            } else {
              dispatch({
                type: ADD_HABIT, 
                habit
              })
              dispatch(getCurrentUser())
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        }
}

export function editHabit(habit) {
  return dispatch => {
    return fetch(`${URL}/${habit.id}`, {
      credentials: "include",
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(habit),
    })
    .then(response => response.json())
    .then(habit => {
      if (habit.error) {
        alert(habit.error)
      } else {
        dispatch({
          type: EDIT_HABIT, 
          habit
        })
        dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export function deleteHabit(habitId) {
  return (dispatch) => {
    return  fetch(`${URL}/${habitId}`, {
      credentials: "include",
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => {
      dispatch({
      type: DELETE_HABIT,
      habitId
      })
      dispatch(getCurrentUser())
    })
  }
}

export function updateProgressCount(habit) {
    return dispatch => {
      return fetch(`${URL}/${habit}`, {
        credentials: "include",
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(habit),
      })
      .then(response => response.json())
      .then(habit => {
        if (habit.error) {
          console.log(habit.error)
        } else if (habit.notice){
          console.log(habit.notice)
        } else {
          dispatch({
            type: EDIT_HABIT, 
            habit
          })
          dispatch(getCurrentUser())
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
