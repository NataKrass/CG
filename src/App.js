import React from 'react'

import { Header, About, Mission, Services, Setting, Case, Network, Partners, Faq, Contact, Footer } from './components'
import  './assets/fonts/style.css'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <About />
      <Mission />
      <Services />
      <Setting />
      <Case />
      <Network />
      <Partners />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
