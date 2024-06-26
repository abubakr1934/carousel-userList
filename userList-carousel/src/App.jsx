import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import CarouselComponent from './component/CarouselComponent'
import Faq from './component/Faq'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignupLogin from './component/SignupLogin'
import Homepage from './component/Homepage'
import Feature from './component/Feature'
function App() {
  return (
    <>
      {/* <CarouselComponent></CarouselComponent>
      <Faq></Faq>
      {/* <SignupLogin></SignupLogin>  */}
      <Homepage></Homepage>
      
      {/* <SignupLogin></SignupLogin> */}
    </>
  )
}

export default App
