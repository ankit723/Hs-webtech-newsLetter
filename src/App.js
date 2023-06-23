import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import TopImageBottomText from './Components/topImageBottomText';
import LeftImageRightText from './Components/leftImageRightText';
import footerDemo from "./Icons/demoFooter.jpg";
import Gadgets from "./Pages/Gadgets/Gadgets";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/gadgets" element={<Gadgets />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
