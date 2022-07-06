import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import {Home} from './components/home/Home';
import Services from './components/services/Services'
import './App.css';
import {BrowserRouter as Router,Route,Routes   } from "react-router-dom";
import { Query } from './components/query/Query';
import { AboutUs } from './components/aboutus/AboutUs';
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Services' element={<Services/>} />
              <Route path='/Query' element={<Query/>}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
