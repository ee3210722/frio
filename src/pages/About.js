import React from 'react'
import a11 from '../assets/a11.png'
import './style.css'
import NavSection from '../NavSection'
import a12 from '../assets/a12.png';
import a13 from '../assets/a13.png';
import a14 from '../assets/a14.png';
import a15 from '../assets/a15.png';

export default function About() {
  return (
    <div>
      <NavSection img={a11}/>
      <img src={a12} alt="" className="more-margin" />
      <img src={a13} alt="" className="a13" />
      <img src={a14} alt="" className="more-margin" />
      <img src={a15} alt="" className="more-margin" />
    </div>
  )
}
