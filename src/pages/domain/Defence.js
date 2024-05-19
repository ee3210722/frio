import React from 'react'
import defence from '../../assets/defence.png';
import d42 from '../../assets/d42.png';
import d43 from '../../assets/d43.png';
import d44 from '../../assets/d44.png';
import '../style.css';
import NavSection from '../../NavSection';

export default function Defence() {
  return (
    <div>
      <NavSection img={defence}/>
      <img src={d42} alt="" className="more-margin" />
      <img src={d43} alt="" className="fill-with-margin" />
      <img src={d44} alt="" className="fill-with-margin" />
    </div>
  )
}
