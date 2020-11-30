import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Page from './components/Page'


class App extends Component{
  render() {
    return (
      <div>
        <Navbar />
        <Page />
        <Footer />
      </div>
      )
  }
}

export default App;
