import React from 'react';
import { Leva } from 'leva';
import StaticScene from './components/StaticScene';
import './App.css';

function App() {
  return (
    <div className="App">
      <Leva collapsed={false} />
      <StaticScene />  
    </div>
  );
}

export default App;
