import React, { useState } from 'react';
import './App.css';

function App() {
  const [life_of_player, setLife_of_player] = useState(0);
  return (
    <div className='App'>
      <header>
        <h1>Counter app for score</h1>
        <small>Note : Values only above 0</small>
      </header>
      {/* read the state */}
      <h2>Current Score : {life_of_player}</h2>
      {/* update the state */}
      <button
        onClick={() =>
           setLife_of_player(life_of_player + 1)
        }
        className='btn'
      >
        Increase Score +1
      </button>
      <button
        onClick={() =>
          life_of_player <= 0 ? '' : setLife_of_player(life_of_player - 1)
        }
        className='btn'
      >
        Decrease Score -1
      </button>
      <button
        onClick={() => setLife_of_player(life_of_player + 10)}
        className='btn'
      >
        Increase 10
      </button>
      <button onClick={() => life_of_player <=9 ? setLife_of_player(0) : setLife_of_player(life_of_player - 10)} className="btn">Decrease 10</button>
       
      <button onClick={() => setLife_of_player(0)} className='btn'>
        Reset Score
      </button>      

      <small className="copy">&copy; Abdul Siddiqui</small>
    </div>
  );
}

export default App;
