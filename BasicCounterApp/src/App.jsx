import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0) ;
  const increaseValue = () =>{
    setCount(count + 1);
  }
  const decreaseValue = () =>{
    setCount(count - 1);
  }
  const resetValue = () => {
    setCount(0);
  }
  return (
    <>
      <h1>First App using ReactJS</h1>
      <div className='box'>
        <div className="header">
          Simple Click Counter in ReactSJ
        </div>
        <dic className="counter">
          Current Number
          <h2>{count}</h2>
          <button onClick={increaseValue}>+ Increase +</button>
          <button onClick={decreaseValue}>- Decrease -</button>
          <button onClick={resetValue}>* Reset *</button>
        </dic>
      </div>
    </>
  )
}

export default App