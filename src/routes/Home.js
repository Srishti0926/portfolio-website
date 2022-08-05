import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg />
      <About/>
      <Skills/>
      <Footer />
    </div>
  )
}

export default Home