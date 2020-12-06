import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';

function reducer(state = { characters: [] }, action) {
  switch (action.type) {
    case 'FETCH_CHARACTERS':
      return { ...state, characters: action.data }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store