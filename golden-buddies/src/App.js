import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    <div className="pages">
      <Routes>
        <Route path="/"
        element={<Home />}
        />
        <Route path="/login"
        element={<Login />}
        />
        <Route path="/signup"
        element={<Signup />}
        />
      </Routes>
    </div>
      </BrowserRouter>
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
      </header>
    </div>
  );
}

export default App;
