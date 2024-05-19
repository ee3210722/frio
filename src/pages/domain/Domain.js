import React from 'react'
import domain from '../../assets/domain.png';
import d12 from '../../assets/d12.png';
import d13 from '../../assets/d13.png';
import d14 from '../../assets/d14.png';
import d15 from '../../assets/d15.png';
import '../style.css';
import NavSection from '../../NavSection';

export default function Domain() {
  return (
    <div>
      <NavSection img={domain}/>
      <img src={d12} alt="" className="fill-with-margin" />
      <img src={d13} alt="" className="fill-with-margin" />
      <img src={d14} alt="" className="fill-with-margin" />
      <img src={d15} alt="" className="fill-with-margin" />
    </div>
  )
}
