import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
