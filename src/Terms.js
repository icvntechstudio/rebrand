import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TermsHeaderImage from './components/TermsHeaderImage'
import TermsBody from './components/TermsBody'


export default function Terms() {

  return (
    <>
      <Navbar />
        <section className="relative h-500-px min-h-screen-75">
          <TermsHeaderImage />
        </section>
        <TermsBody />
        <Footer />
    </>
  )
}