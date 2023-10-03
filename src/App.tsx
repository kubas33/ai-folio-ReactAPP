import { useState, useEffect } from 'react'
import './theme/main.scss'


import MainNavbar from './components/MainNavbar';
import Home from './pages/Home';




function App() {



  return (
    <>
    <MainNavbar/>

        <hr />
    <main>
      <Home/>
    </main>
    </>
  )
}

export default App
