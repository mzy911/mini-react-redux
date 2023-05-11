import React from 'react';
import {useSelector} from '../react-redux'

const Counter = () => {
  const state = useSelector(state => state.counterReducer.number)
  return (
    <div>
      <h2>子组件 Counter</h2>
      <div style={{color:'red'}}>
        count：{state}
      </div>
    </div>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     number: state.number,
//   }
// }
// export default connect(mapStateToProps)(Counter)


export default Counter

