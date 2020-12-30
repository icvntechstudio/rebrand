import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Navbar from './components/Navbar'
import PrivacyHeaderImage from './components/PrivacyHeaderImage'
import Footer from './components/Footer'
import PrivacyBody from './components/PrivacyBody'




export default function Privacy() {


  return (
    <>
      <Navbar />
          <section className="relative h-500-px min-h-screen-75"><PrivacyHeaderImage /></section>
          <PrivacyBody />
          <Footer />
    </>
  )
}