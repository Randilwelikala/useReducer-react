import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import NameList from './NameList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <NameList/>
      </header>
    </div>
  );
}

export default App;
