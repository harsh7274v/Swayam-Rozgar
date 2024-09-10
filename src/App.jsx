import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import DevSignin from './components/devsignin/devsignin'
import DevSignup from './components/devsignup/devsignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><DevSignin/>
     
      </div>
    </>
  );
}

export default App
