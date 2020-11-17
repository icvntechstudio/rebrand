import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Feature from './components/Features'

class App extends Component{
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Feature />
        <Footer />
      </div>
      )
  }
}

export default App;
