import React from "react"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Dishes from "./components/Dishes"
import About from "./components/About"
import Mission from "./components/Mission.jsx"
import Expertise from "./components/Expertise.jsx"
import Review from "./components/Review.jsx"
import ContactSection from "./components/ContactSection.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection/>
      <Navbar/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}

export default App
