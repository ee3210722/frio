import React from 'react'
import footer from '../assets/footer.png'
import './footer.css'

export default function Footer() {
  return (
    <>
    <div className='footer'> 
        <img src={footer} alt="Footer" className="footerImg" />
    </div>
    </>
  )
}
