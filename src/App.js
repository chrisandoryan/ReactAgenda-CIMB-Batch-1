import logo from './logo.svg';
import './App.css';
import HomeClassComponent from './components/HomeClassComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

// npm start

// Component ada 2 jenis: Class Component & Functional Component
function DefaultReact() {
  var name = "Ryan Hartanto";
  var greeting = `Welcome, ${name}!`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome, {name}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      <center>
        <h1>ReactAgenda.io</h1>
        <p>Welcome and feel free to use our application.</p>
      </center>
      <HomeClassComponent />
    </div>
  )
}

export default App;
