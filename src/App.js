import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import TopImageBottomText from './Components/topImageBottomText';
import LeftImageRightText from './Components/leftImageRightText';
import footerDemo from "./Icons/demoFooter.jpg"


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
