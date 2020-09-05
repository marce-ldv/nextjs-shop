import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
