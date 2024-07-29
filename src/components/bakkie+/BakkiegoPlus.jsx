import React from 'react'
import './bkplus.css'
import bakdash from '../../assets/bakkiedash.jpeg'

const BakkiegoPlus = () => {
  return (
    <section id='bakkieplus'>
      <div id="parent">
      <img src={bakdash} alt="" id='img' />
      <div id='bakkie' className='overlay'>
      <h2 id='partner-heading'>Don't have a Bakkie?</h2>
      <h2 id='partner-desc'>No problem! <br/> Sign up for BakkieGo+ coming soon</h2>
      <h3>With BakkieGo+ you can rent a bakkie. We work with several partners that can offer you eligible vehicles on favourable terms.</h3>
    </div>
    </div>
    </section>
  )
}

export default BakkiegoPlus