import React from 'react'
import p21 from '../../assets/p21.png'
import p22 from '../../assets/p22.png'
import p23 from '../../assets/p23.png'
import p24 from '../../assets/p24.png'
import p25 from '../../assets/p25.png'
import NavSection from '../../NavSection'
import '../style.css'

export default function Product2() {
  return (
    <div>
      <NavSection img={p21}/>
      <div className='p12-container'>
        <img src={p22} alt="" className="p24" />
      </div>
      <img src={p23} alt="" className="more-margin" />
      <img src={p24} alt="" className="p14" />
      <img src={p25} alt="" className="just-fill" />
    </div>
  )
}
