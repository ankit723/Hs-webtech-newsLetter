import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Gadgets from "./Pages/Gadgets/Gadgets";
import Lifestyle from './Components/Lifestyle/Lifestyle';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/gadgets" element={<Gadgets />}/>
          <Route path="/lifestyle" element={<Lifestyle />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
