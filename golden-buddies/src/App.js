import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App"><Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="./pages/Profile" element = {<Profile />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;