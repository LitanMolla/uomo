import React from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'

const NotFound = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-1">
                <p>Error dafa</p>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default NotFound