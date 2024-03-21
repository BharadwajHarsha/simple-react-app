import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is a simple/sample app to try amplify deployment
        </p>
        <h4>Items to bring</h4>
        <ol>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
