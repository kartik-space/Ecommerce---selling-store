import React from 'react'
import Navbar from '../Components/Global/Navbar'
import Sec1 from '../Components/Landing/Sec1'
import Sec2 from '../Components/Landing/Sec2'
import Sec3 from '../Components/Landing/Sec3'
import Sec4 from '../Components/Landing/Sec4'
import Footer from '../Components/Global/Footer/Footer'



function Home() {
  return (
    <div>
      <Navbar />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Footer />
    </div>
  )
}

export default Home
