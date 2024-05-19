import React from 'react'
import p11 from '../../assets/p11.png'
import p12 from '../../assets/p12.png'
import p13 from '../../assets/p13.png'
import p14 from '../../assets/p14.png'
import p15 from '../../assets/p15.png'
import '../style.css'
import NavSection from '../../NavSection'

export default function Product1() {
  return (
    <div>
      <NavSection img={p11}/>
      <div className='p12-container'>
        <img src={p12} alt="" className="more-margin" />
      </div>
      
      <img src={p13} alt="" className="more-margin" />
      <img src={p14} alt="" className="p14" />

      <div className='p12-container'>
        <img src={p15} alt="" className="p14" />
      </div>
      
    </div>
  )
}
