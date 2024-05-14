import React from 'react';
import StubHublogo from './images/stubhub-logo.png';
import Fanaticslogo from './images/fanatics-logo.png';

function nhl() {
  return (
    <div className='nhl container mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-1"></div>
        <div className="col-span-1 md:col-span-1">
          <h1 className='text-center pt-5 mt-4 nhl-heading'><b>NHL</b></h1>
        </div>
        <div className="col-span-1 md:col-span-1 text-right pr-3">
          <p className='nhl-text pt-3'>TICKETS SPONSOR</p>
          <img className='img-fluid pt-0 pb-2' src={StubHublogo} width={70} alt="StubHub Logo"/>
          <p className='nhl-text pt-3'>OFFICIAL GEAR PARTNER</p>
          <div className="container-fluid mb-3">
            <img className='img-fluid' src={Fanaticslogo} width={150} alt="Fanatics Logo"/>
          </div>
          <button type="button" className="btn-sub btn-primary mt-5 p-2 ps-3 pe-3 mb-5 me-3">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default nhl;
