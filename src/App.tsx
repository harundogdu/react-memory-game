import './App.css';
import { CardContainer } from './containers';

function App() {

  return (
    <div className='app'>
      <h1>Memory Game</h1>
      <button>Start a New Game</button>
      <CardContainer />
      <p>Turn : 0</p>
    </div>
  );
}

export default App;
