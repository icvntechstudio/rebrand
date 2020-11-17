import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/tailwind.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Feature from './components/Features'
import Clients from './components/Clients'

class App extends Component{
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Feature />
        <Clients />
        <Footer />
      </div>
      )
  }
}

export default App;
