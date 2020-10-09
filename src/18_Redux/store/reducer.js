import {
  INCREMENT,
  DECREMENT,
  CHANGE_BANNER
} from './instance'

//counter
const initStateCounter = {
  counter: 0
}
function counterReducer(state = initStateCounter, action){
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.num }
    case DECREMENT:
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

//banner
const initStateBanner = {
  banner: []
}
function bannerReducer(state = initStateBanner, action){
  switch (action.type) {
    case CHANGE_BANNER:
      return { ...state, banner: action.banner}
    default:
      return state
  }
}

function reducer(state = {}, action) {
  return {
    countetInfo: counterReducer(state.countetInfo, action),
    bannerInfo: bannerReducer(state.bannerInfo, action)
  }
}
export default reducer