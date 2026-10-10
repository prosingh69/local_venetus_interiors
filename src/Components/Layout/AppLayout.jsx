import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import FloatingContactButtons from '../CommonComponent/FloatingContactButtons'
import { ConsultationModalProvider } from '../../context/ConsultationModalContext'
import { Toaster } from 'react-hot-toast'

const AppLayout = () => {
  return (
    <ConsultationModalProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar/>
      <main className="w-full overflow-x-hidden">
        <Outlet/>
      </main>
      <Footer/>
      <FloatingContactButtons />
      <ScrollRestoration/>
    </ConsultationModalProvider>
  )
}

export default AppLayout