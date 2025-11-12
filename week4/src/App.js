import { useState } from 'react';
import CountNumber from './countNumber';
import Button from './button';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function increment_10() {
    setCount(count + 10);
  }

  function decrement_10() {
    setCount(count - 10);
  }

  return (
    <div>
      <CountNumber count={count} />
      <Button onClick={decrement_10}>-10</Button>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={reset}>reset</Button>
      <Button onClick={increment}>+1</Button>
      <Button onClick={increment_10}>+10</Button>
    </div>
  );
}

export default App;