import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Gadgets from "./Components/Gadgets/Gadgets/Gadgets";
import Lifestyle from './Components/Lifestyle/Lifestyle';
import Videos from './Components/Videos/video';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/gadgets" element={<Gadgets />}/>
          <Route path="/lifestyle" element={<Lifestyle />}/>
          <Route path="/video" element={<Videos />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;