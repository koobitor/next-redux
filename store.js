import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const state = {
  title: ''
}

export const actionTypes = {
  TITLE: 'TITLE'
}

export const reducer = (state = state, action) => {
  switch (action.type) {
    case actionTypes.TITLE:
      return Object.assign({}, state, { title: action.title + " " + action.name  })
    default: return state
  }
}

export const setTitle = (title, name) => dispatch => {
  return dispatch({ type: actionTypes.TITLE, title: title, name: name })
}

export function initializeStore (initialState = state) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}