import React from 'react'
import logistics from '../../assets/logistics.png';
import d52 from '../../assets/d52.png';
import d53 from '../../assets/d53.png';
import d54 from '../../assets/d54.png';
import '../style.css';
import NavSection from '../../NavSection';

export default function Logistics() {
  return (
    <div>
      <NavSection img={logistics}/>
      <img src={d52} alt="" className="more-margin" />
      <img src={d53} alt="" className="fill-with-margin" />
      <img src={d54} alt="" className="fill-with-margin" />
    </div>
  )
}
