import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext, useState } from 'react';

export const RingContext = createContext('ring');

function App() {
  const [house, setHouse] = useState(2);
  const ornaments = 'Shokto Mati Ring'
  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <button
          onClick={() => setHouse(house + 1)}
        >Buy a new house</button>

        <GrandFather house={house}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
