import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Faq from './components/FAQ/Faq.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Faq></Faq>
    <Testimonial></Testimonial>
    <Footer></Footer>
    
      </>
  )
}

export default App


