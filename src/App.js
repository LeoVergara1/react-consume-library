import logo from './logo.svg';
import './App.css';
import 'react-library-leo-vergara/dist/index.css';
import { Button, ButtonStyle } from 'react-library-leo-vergara';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label="Hola mundo" onClick={() => console.log("Hola mundo")}/>
        <br></br>
        <ButtonStyle label="Hola mundo" backgroundColor={'black'}/>
      </header>
    </div>
  );
}

export default App;
