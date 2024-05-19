import React from 'react'
import c11 from '../assets/c11.png';
import c12 from '../assets/c12.png';
import c13 from '../assets/c13.png';
import './style.css';
import NavSection from '../NavSection';

export default function Contact() {
  return (
    <div>
      <NavSection img={c11}/>
      <img src={c12} alt="" className="c12" />
      <img src={c13} alt="" className="c13" />
    </div>
  )
}
