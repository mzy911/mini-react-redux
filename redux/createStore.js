/**
 * 创建 store 对象
 * @param reducer：变更state的对象函数
 * @param preloadedState：上次更新后的最新state
 * @param enhancer：高阶函数、中间件
 * @returns {{dispatch: (function(*): *), getState: (function(): *), subscribe: (function(*): function(): void)}|*}
 */
const createStore = (reducer, preloadedState, enhancer) => {

  // 最新的 state 状态值
  let state = preloadedState;
  // 收集依赖，state更新时触发依赖更新
  const listeners = [];

  // enhancer 存在、createStore 作为参数继续调用
  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState)
  }

  // 1、getState：获取state状态
  const getState = () => state;

  // 2、dispatch：触发state更新的动作
  function dispatch(action) {
    // 计算过后返回新的 state
    state = reducer(state, action)
    // 通知依赖更新
    listeners.forEach(listener => listener())
    return action
  }

  // 3、subscribe：收集依赖
  function subscribe(listener) {
    listeners.push(listener)
    // 4、组件销毁时、取消当前依赖
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  // 初始化store
  dispatch({})

  return {
    getState,
    dispatch,
    subscribe,
  }
}

export default createStore
