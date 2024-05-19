import React from 'react'
import h11 from '../assets/h11.png'
import h12 from '../assets/h12.png'
import h13 from '../assets/h13.png'
import rec1 from '../assets/rec1.png'
import rec2 from '../assets/rec2.png'
import rec3 from '../assets/rec3.png'
import './style.css'
import NavSection from '../NavSection'

export default function Home() {
  return (
    <div>
        <NavSection img={h11}/>
        <img src={h12} alt="" className="h12" />
        <div className="divider"></div>
        <img src={h13} alt="" className="less-margin" />
        <div className="divider"></div>
        <div className="zebra-crossing">
            <img src={rec1} alt="" className="zebra-image" />
            <img src={rec2} alt="" className="zebra-image" />
            <img src={rec3} alt="" className="zebra-image" />
        </div>
        <div className="divider"></div>
    </div>
  )
}
