import React from 'react'
import p41 from '../../assets/p41.png'
import p42 from '../../assets/p42.png'
import p43 from '../../assets/p43.png'
import p44 from '../../assets/p44.png'
import NavSection from '../../NavSection'
import '../style.css'

export default function Product4() {
  return (
    <div>
      <NavSection img={p41}/>
      <img src={p42} alt="" className="just-fill" />
      <img src={p43} alt="" className="more-margin" />
      <img src={p44} alt="" className="p14" />
    </div>
  )
}
