import React from 'react'
import pharma from '../../assets/pharma.png';
import d22 from '../../assets/d22.png';
import d23 from '../../assets/d23.png';
import d24 from '../../assets/d24.png';
import '../style.css';
import NavSection from '../../NavSection';

export default function Pharma() {
  return (
    <div>
      <NavSection img={pharma}/>
      <img src={d22} alt="" className="more-margin" />
      <img src={d23} alt="" className="fill-with-margin" />
      <img src={d24} alt="" className="fill-with-margin" />
    </div>
  )
}
