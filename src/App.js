import {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  const decrement = (event) =>{
    if(count ===0)
    return 0;
setCount(count-1);
  }
  return (
    <div className="container">
      <h2>Counter App</h2>
      <div className="counter-app" src="https://i.pinimg.com/originals/43/fc/32/43fc328be25a95be94e2f6c6f5246dc7.gif">
        <div className="display">
          <span>{count}</span>
        </div>
        <div className="buttons">
        <button className="increment" onClick={()=>(setCount(count+1))}>+</button>
        <button className="decrement" onClick={(count)=>(decrement())}>-</button>
      </div>
      </div>
    </div>
  );
}

export default App;
