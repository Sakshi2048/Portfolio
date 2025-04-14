import React from 'react'

import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import About from "../Components/About"
import ProjectsAll from "../Components/Skills"
import Text from "../Components/Text"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import CTA from '../Components/CTA'
import Section from '../Components/Section'


function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Section/>
      <ProjectsAll/>
      <Text/>
      <Projects/>
      <CTA/>
     
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default Home
