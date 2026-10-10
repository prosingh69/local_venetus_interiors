import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import FloatingContactButtons from '../CommonComponent/FloatingContactButtons'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <main className="w-full overflow-x-hidden">
      <Outlet/>
    </main>
    <Footer/>
    <FloatingContactButtons />
    <ScrollRestoration/>
    </>

  )
}

export default AppLayout