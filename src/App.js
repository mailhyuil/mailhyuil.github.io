import './App.css';
import { useState } from 'react';

function App() {
  const [a, b] = useState(1);
  return (
    <div>
      <h1>안녕하세요!</h1>
      <h1>{a}</h1>
      <button onClick={() => { b(a + 1) }}>Click me!</button>
    </div>
  );
}

export default App;
