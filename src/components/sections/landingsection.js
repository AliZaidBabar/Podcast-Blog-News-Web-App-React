import React from 'react'
import NHL from '../nhl';
function landingsection() {
  return (
    <div className='landingsection container-fluid pt-5' style={{backgroundColor:'white'}}>
      <div className="row">
        <div className="col-lg-12 ">
            <NHL/>
        </div>
      </div>
    </div>
  )
}

export default landingsection
