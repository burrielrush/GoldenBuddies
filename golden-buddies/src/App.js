import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';


function App() {

  const { user } = useAuthContext()
  return (
    <div className="App"><Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {user ? <Home /> : <Navigate to ="/login"/>} />
        <Route path="/login" element = {!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element = {!user ? <Signup /> :<Navigate to="/" />} />
        <Route path="/profile" element = {<Profile />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
