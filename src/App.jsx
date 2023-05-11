import React, {useState} from 'react';
import Counter from './Counter';
import Button from './Button';

const App = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(0)
  return (
    <div>
      <h2>父组件</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>add: {count}</button>
        &nbsp;
        <button onClick={() => setStep(step + 1)}>add step: {step}</button>
      </div>
      <Button step={step}/>
      <Counter/>
    </div>
  )
}


export default App
