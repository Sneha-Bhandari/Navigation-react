import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Navigation/Header'
import { useLocation } from 'react-router'
import{Routes, Route} from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import Demo from './Pages/Demo_form'
import Form from './Pages/Form'

function App() {
  const [count, setCount] = useState(0)

  const location=useLocation()
  console.log(location, "location");
  return (
    <>
    <Header></Header>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/demo' element={<Demo/>}/>
    <Route path='/form' element={<Form/>}/>

   </Routes>
  
    </>
  )
}

export default App
