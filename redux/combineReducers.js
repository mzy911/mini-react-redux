// const reducers ={ count, user }
const combineReducers = (reducers) => {

  // 初始化时返回次函数，每次触发 action 都会执行次函数
  return function combination(state = {}, action) {
    const nextState = {};
    Object.keys(reducers).forEach(key => {
      const reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
    })
    // 返回新的state
    return nextState;
  };
}

export default combineReducers;
