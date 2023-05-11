// import {createStore, applyMiddleware, combineReducers} from 'redux'
import createStore from './createStore';
import combineReducers from './combineReducers';
import applyMiddleware from './applyMiddleware'



// createStore(reducer, [preloadedState], [enhancer])
// combineReducers(reducers)
// applyMiddleware(...middlewares)
// bindActionCreators(actionCreators, dispatch)
// compose(...functions)
export {
  createStore,
  applyMiddleware,
  combineReducers
}
