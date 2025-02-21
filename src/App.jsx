import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Review from './Components/Reviews/Review'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Review />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
