import React from 'react'
import b11 from '../assets/b11.png'
import b12 from '../assets/b12.png'
import './style.css'
import NavSection from '../NavSection'

export default function Blog() {
  return (
    <div>
      <NavSection img={b11}/>
      <img src={b12} alt="" className="h12" />
    </div>
  )
}
