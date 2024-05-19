import React from 'react'
import p51 from '../../assets/p51.png'
import p52 from '../../assets/p52.png'
import p53 from '../../assets/p53.png'
import p54 from '../../assets/p54.png'
import p55 from '../../assets/p55.png'
import NavSection from '../../NavSection'
import '../style.css'

export default function Product5() {
  return (
    <div>
      <NavSection img={p51}/>
      <img src={p52} alt="" className="just-fill" />
      <img src={p53} alt="" className="p14" />
      <img src={p54} alt="" className="p14" />
      <img src={p55} alt="" className="just-fill" />
    </div>
  )
}
