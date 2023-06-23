import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import SubLifestyle from './screens/SubLifestyle';
import Lifestyle from './screens/Lifestyle';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Lifestyle/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
