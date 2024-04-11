import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>
          <span>//</span>Flateats
        </h1>
        <p>The only source for reliable lunch recommendations.</p>
      </div>
    </>
  );
}

export default App;
