// import {createStore} from "redux";
import createStore from "../redux/createStore";
import combineReducers,{} from "../redux/combineReducers";
import applyMiddleware,{logger,logger2} from "../redux/applyMiddleware";


function counterReducer(state = {value: 0, number: 1}, action) {
  switch (action.type) {
    case 'counter/incremented':
      return {...state, value: state.value + 1}
    case 'counter/decremented':
      return {...state, value: state.value - 1}
    case 'counter/decrementedNum':
      return {...state, number: state.number - 1}
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}


// 向外暴露 { subscribe, dispatch, getState }.
export default createStore(
  combineReducers({ counterReducer, todos}), // reducers
  undefined, // 初始化的值
  applyMiddleware(logger,logger2) // 中间件
)
