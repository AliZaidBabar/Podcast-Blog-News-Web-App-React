import React from 'react'
import StubHublogo from './images/stubhub-logo.png'
import Fanaticslogo from './images/fanatics-logo.png'
function nhl() {
  return (
    <div className='nhl container'>
        <div className="row mx-auto">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
            <h1 className='text-center pt-5 mt-4 nhl-heading'><b>NHL</b></h1>
            </div>
            <div className="col-lg-4 text-end  pe-3">
              <p className=' nhl-text pt-3'>TICKETS SPONSOR</p>
              <img className='img-fluid pt-0 pb-2' src={StubHublogo} width={70}/>
              <p className=' nhl-text pt-3'>OFFICIAL GEAR PARTNER</p>
              <div className="container-fluid mb-3">
              <img className='img-fluid' src={Fanaticslogo} width={150} />
              </div>
              <button type="button" class="btn btn-sub btn-primary mt-5 p-2 ps-3 pe-3 mb-5 me-3">Subscribe</button>
              
            </div>
        </div>
    </div>
  )
}

export default nhl
