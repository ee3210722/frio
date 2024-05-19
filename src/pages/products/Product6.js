import React from 'react'
import p61 from '../../assets/p61.png'
import p62 from '../../assets/p62.png'
import p63 from '../../assets/p63.png'
import p64 from '../../assets/p64.png'
import p65 from '../../assets/p65.png'
import NavSection from '../../NavSection'
import '../style.css'

export default function Product1() {
  return (
    <div>
      <NavSection img={p61}/>
      <img src={p62} alt="" className="more-margin" />
      <img src={p63} alt="" className="fill-with-margin" />
      <img src={p64} alt="" className="fill-with-margin" />
      <img src={p65} alt="" className="just-fill" />
    </div>
  )
}
