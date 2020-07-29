import React from 'react';
import Navv from './boot/Navv';
import './App.css';
import Opinion from './boot/Opinion';
import News from './boot/News';
import Team from './boot/Team';
import Rep from './boot/Rep';
import Social from './boot/Social'
import Slider from './boot/Slider';
import About from './boot/About';
import Service from './boot/Service';
import Secslider from './boot/Secslider';
import Counter from'./boot/Counter';
import Company from './boot/Company'
import Footer from './boot/Footer'
function App() {
  return (
    <div className="App">
      <Navv/>
      <Rep/>
      <Slider/>
      <Social/>
      <About/>
      <Service/>
        <Secslider/>
        <Counter/>
        <Team/>
        <Opinion/>
        <News/>
        <Company/>
        <Footer/>
    </div>
  );
}

export default App;
