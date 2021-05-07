import logo from './logo.svg';
import './App.css';
import HomeClassComponent from './components/HomeClassComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFunctionalComponent from './components/HomeFunctionalComponent';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

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

function LandingPage() {
  return (
    <div>
      {/* tag a akan membuat browser nge reload (tidak SPA) */}
      {/* <a href="http://google.com/">Go To Agenda Class</a> */}
      <Link to="/agenda/class">Go To Agenda Class</Link>
      <Link to="/agenda/function">Go To Agenda Function</Link>
    </div>
  );
}

// Component untuk mengatur routing aplikasi
function Routing() {
  return (
    <Router>
      {/* jika ingin punya banyak route, kita pakai Switch */}
      {/* yang divisit user: localhost:3000/agenda/class */}
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/agenda/class">
          <h2>Powered by Class Component</h2>
          <HomeClassComponent />
        </Route>
        <Route path="/agenda/function">
          <h2>Powered by Functional Component</h2>
          <HomeFunctionalComponent />
        </Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <div>
      <center>
        <h1>ReactAgenda.io</h1>
        <p>Welcome and feel free to use our application.</p>
      </center>
      <Routing />
    </div>
  )
}

export default App;
