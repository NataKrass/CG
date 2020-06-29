import React from 'react'

import { Header, About, Mission, Services, Setting, Case } from './components'
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
    </div>
  )
}

export default App
