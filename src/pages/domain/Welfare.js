import React from 'react'
import welfare from '../../assets/welfare.png';
import d32 from '../../assets/d32.png';
import d33 from '../../assets/d33.png';
import d34 from '../../assets/d34.png';
import '../style.css';
import NavSection from '../../NavSection';

export default function Welfare() {
  return (
    <div>
      <NavSection img={welfare}/>
      <img src={d32} alt="" className="more-margin" />
      <img src={d33} alt="" className="fill-with-margin" />
      <img src={d34} alt="" className="fill-with-margin" />
    </div>
  )
}
