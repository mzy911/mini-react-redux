import React from 'react';
import {connect} from '../react-redux'

const Button = ({count, increment, decrement, decrementNum}) => {
  return (
    <div>
      <h2>子组件 Button</h2>
      <div style={{marginTop: '20px'}}>
        <span>操作Redux中的数据：</span>
        &nbsp;
        <button onClick={increment}>+ value</button>
        &nbsp;
        <button onClick={decrement}>- value</button>
        &nbsp;
        <button onClick={decrementNum}>- count</button>
      </div>
      <div style={{color:'red'}}>
        value + step: {count}
      </div>
    </div>
  )
}

/**
 * @param state：redux中的state
 * @param parentProps：父组件传递的props
 * @returns {{count: *}}
 */
const mapStateToProps = (state, parentProps) => {
  return {
    count: state.counterReducer.value + parentProps.step,
  }
}

const mapDispatchToProps = (dispatch, parentProps) => {
  return {
    increment: () => dispatch({type: 'counter/incremented'}),
    decrement: () => dispatch({type: 'counter/decremented'}),
    decrementNum: () => dispatch({type: 'counter/decrementedNum'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)

