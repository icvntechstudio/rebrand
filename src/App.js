import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Feature from './components/Features'
import Clients from './components/Clients'
import Portfolio from './components/Portfolio'

class App extends Component{
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Feature />
        <Clients />
        <Portfolio />
        <Footer />
      </div>
      )
  }
}

export default App;
