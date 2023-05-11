// createStore(reducer, preloadedState, enhancer)
// => createStore(reducer, preloadedState, applyMiddleware(...middlewares))
// => enhancer(createStore)(reducer, preloadedState)
// 插件执行有点类似koa的洋葱圈模型，从左往右执行，直到真正的store.dispatch
const applyMiddleware = (...middlewares) => {
  // 初始化返回次函数
  return (createStore) => {
    return (reducer, preloadedState) => {
      const store = createStore(reducer, preloadedState)
      const {getState} = store;
      const mids = middlewares.map(mid => mid({getState}))
      const dispatch = (action) => {
        return next(0)(action)

        function next(i) {
          if (i === mids.length) return store.dispatch;
          const mid = mids[i]
          return mid(next(i + 1))
        }
      }
      return {
        ...store,
        dispatch
      }
    }
  }
}

export default applyMiddleware



export function logger({ getState, dispatch }) {
  return next => action => {
    console.log('will dispatch===============1')
    const returnValue = next(action)
    console.log('state after dispatch================1', getState())
    return returnValue
  }
}

export function logger2({ getState, dispatch }) {
  return next => action => {
    console.log('will dispatch==============2')
    const returnValue = next(action)
    console.log('state after dispatch==============2', getState())
    return returnValue
  }
}
