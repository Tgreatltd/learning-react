import logo from './logo.svg';
import './App.css';
import RefUsing from './UseRef/RefUsing';
import Todow from './todo/Todow';
import Rendered from './practice/Rendered';
import Test from './firstclass/Test';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let name = 'TOBI'
  console.log(name);
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
    {/* <RefUsing/> */}
      {/* <Test/> */}
    {/* <Todow/> */}
    <Rendered/>
    </div>
  );
}

export default App;
