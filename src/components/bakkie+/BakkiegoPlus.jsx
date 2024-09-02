import React from 'react'
import './bkplus.css'
import bakdash from '../../assets/bakkiedash.jpeg'

const BakkiegoPlus = () => {
  return (
    <section id='bakkieplus'>
      <div id="parent">
      <img src={bakdash} alt="" className='bkplus-graphic' />
      <div className='bakkie overlay'>
      <h2 className='partner-heading'>Don't have a Bakkie?</h2>
      <p className='partner-desc'>No problem! <br/> Sign up for BakkieGo+ coming soon</p>
      <p className='partner-cta'>With BakkieGo+ you can rent a bakkie. We work with several partners that can offer you eligible vehicles on favourable terms.</p>
    </div>
    </div>
    </section>
  )
}

export default BakkiegoPlus