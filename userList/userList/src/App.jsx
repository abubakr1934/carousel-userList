import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Features from './components/Features/Features.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Faq from './components/FAQ/Faq.jsx'
import Hero from './components/Hero/Hero.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Features></Features>
    <Faq></Faq>
    <Testimonial></Testimonial>
    <Footer></Footer>
    
    
      </>
  )
}

export default App


