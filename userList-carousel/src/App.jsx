import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarouselComponent from './component/CarouselComponent'
import Faq from './component/Faq'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <CarouselComponent></CarouselComponent>
      <Faq></Faq>
    </>
  )
}

export default App
