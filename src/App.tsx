import './App.css';
import { CardContainer } from './containers';
import { useMemoryCards } from './contexts/memoryContext';

function App() {
  const { startGame, turn } = useMemoryCards();
  return (
    <div className='app'>
      <h1>Memory Game</h1>
      <button onClick={startGame}>Start a New Game</button>
      <CardContainer />
      <h2>Turn : {turn}</h2>
    </div>
  );
}

export default App;
