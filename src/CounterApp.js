import './App.css';
import { increment, decrement } from './actions'
import { useSelector, useDispatch } from 'react-redux'

function CounterApp() {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  return (
    <div className="App">
      <h1 style={styles.header}>Redux Counter</h1>
      <h2>Counter: {counter} </h2>
      <button style={styles.pointer} onClick={()=>dispatch(increment(2))}>+</button>
      <button style={styles.pointer} onClick={()=>dispatch(decrement(2))}>-</button>
      {isLogged ? <h3>Valuable information i should not see</h3> : ''}

      <h4><a href='https://github.com/Elue-dev/React-practices/blob/main/src/CounterApp.js' style={styles.dark}>Git Hub Link &rarr;</a></h4>
    </div>
  );
}

const styles = {
  header: {
    marginBottom: '2rem'
  },

  pointer: {
    cursor: 'pointer'
  },

  dark: {
    color: '#333',
    textDecoration: 'underline',
    paddingTop: '3rem'
  }
}

export default CounterApp;
