import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
