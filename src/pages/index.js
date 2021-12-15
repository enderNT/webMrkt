import * as React from "react"
import './index.css'
import {Link} from 'gatsby'

const IndexPage = () => {
  return (
    <div className="parent">

      <main className="div1">
        <div className="angry-grid">
        <h3 id="item-0">SoundBeam</h3>
        <h4 id="item-1">Home</h4>
        <h4 id="item-2">Detalles</h4>
        <button id="item-3"><Link to='/contact'>Contacto</Link></button>
        </div>
      </main>

      <main className="div2">
        <p>Headphones capable of blocking out any noise. Control what you hear with dual noise sensor technology. 
          Fast charge. Free hands. High-quality streaming via Bluetooth. Supported audio formats: AAC, SBC. 
          Compatible content protection: SCMS-T. 
          Smartphone compatibility lets you make hands-free calls and use the voice assistant.</p>
      </main>

      <main className="div3">
        <div className="parentCard">
          <main className="div1Img"></main>
          <p className="div2Text">Light as a feather</p>
        </div>
      </main>

      <main className="div4">
        <div className="parentCard">
          <main className="div2Img"></main>
          <p className="div3Text">High Quality QuadDac 3.2. Bluethoot 5.2 & NFC Technologies</p>
        </div>
      </main>

      <main className="div5">
        <div className="parentCard">
          <main className="div3Img"></main>
          <p className="div4Text">Everything you need in one device</p>
        </div>
      </main>

      <main className="div6">
        <h6>
        These terms and conditions of data privacy, use of cookies and spam establish the guidelines and practices of protection of personal data, use of cookies and spam of the website. 
        To obtain more information about the website and its operations, you can refer to the sections "Who we are", "What we do" or "Contact" to support your queries. 
        Please read these terms and conditions carefully as they will help you make informed decisions about how to share your personal information with us. 
        Although these terms and conditions apply only to information collected through the website, they are consistent with our policies and practices regarding the personal information we receive.
        </h6>
      </main>

      <main className="div7">
        <button className="btn-contact"><Link to='/contact'>Contact us</Link></button>
      </main>

    </div>
  )
}

export default IndexPage
