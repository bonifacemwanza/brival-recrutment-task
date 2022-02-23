import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Characters from './Pages/Characters';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Blank from './Pages/Blank';


function App() {
  return (
    <div className="App" id="list">
      <Router>
        <Header/>
      <Routes>
          <Route path="/" element={<Blank name="MARVEL"/>} />
          <Route path="/About" element={<Blank name="ABOUT US"/>} />
          <Route path="/Store" element={<Blank name="STORE"/>} />
          <Route path="/Games" element={<Blank name="GAMES"/>} />
          <Route path="/Characters" element={<Characters/>} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
