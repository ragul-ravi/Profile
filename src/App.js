import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Feedback from './components/feedback';
import Services from './components/services.js';
import Team from './components/team.js';
import Photo from './components/photo';
import Faq  from './components/faq';
import About from './components/about';
import Fotter from './components/fotter.js'

import {BrowserRouter as Router, Switch,Route,Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Photo/>
      <About/>
      <Services/>
      <Team/>
      <Faq/>
      <Feedback/>
      <Fotter/>
    </div>
    
    
  );
}

export default App;
