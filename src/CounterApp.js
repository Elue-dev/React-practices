import './App.css';
import { increment, decrement } from './actions'
import { useSelector, useDispatch } from 'react-redux'

function CounterApp() {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  return (
    <div className="App">
      <h2>Counter: {counter} </h2>
      <button style={{cursor: 'pointer'}} onClick={()=>dispatch(increment(2))}>+</button>
      <button style={{cursor: 'pointer'}} onClick={()=>dispatch(decrement(2))}>-</button>
      {isLogged ? <h3>Valuable information i should not see</h3> : ''}
    </div>
  );
}

export default CounterApp;
