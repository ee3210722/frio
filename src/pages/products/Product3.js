import React from 'react'
import p31 from '../../assets/p31.png'
import p32 from '../../assets/p32.png'
import p33 from '../../assets/p33.png'
import p34 from '../../assets/p34.png'
import p35 from '../../assets/p35.png'
import NavSection from '../../NavSection'
import '../style.css'

export default function Product3() {
  return (
    <div>
      <NavSection img={p31}/>
      <img src={p32} alt="" className="p24"/>

      <img src={p33} alt="" className="more-margin" />
      <img src={p34} alt="" className="p14" />
      <img src={p35} alt="" className="just-fill" />
    </div>
  )
}
