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
        <TopImageBottomText topImg={footerDemo} bottomText={"Now Is the Time to Think About Your Small-Business Success"} imgSize={"20rem"} headTextSize={"1.2rem"} author={"Armin Vans"} date={"June 19, 2023"} paragraph={"We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to..."} paraTextSize={"0.9rem"}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
