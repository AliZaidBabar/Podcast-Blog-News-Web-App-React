import React from 'react'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import Iceauthor from '../images/iceauthor.png'
function twocolumnblogs() {
  return (
    <div className='twocolblogsection container-fluid' style={{backgroundColor:'black' ,border:'none'}}>
      <div className="row justify-content-center pt-5">
      <div className="col-lg-4 pb-3 ">
                    <div className="card iceblogcard " style={{backgroundColor:'black' ,border:'none'}}>
                        <img src={img1} className="card-img-top iceimg" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text iceheading" style={{color:'white'}}>Boeser says report of potential trade from Canucks </h4>
                            <div className="container d-flex align-items-center">
                                <img src={Iceauthor} className='img-fluid pb-2' />
                                <p className='p-3 pt-4' style={{color:'white'}}>By Gabie Sheber <span style={{ color: 'gray' }}>. May 22, 2020</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pb-3">
                    <div className="card iceblogcard " style={{backgroundColor:'black' ,border:'none'}}>
                        <img src={img2} className="card-img-top iceimg" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text iceheading" style={{color:'white'}}>Training camp preview: Rookies under the radar entering Qualifiers</h4>
                            <div className="container d-flex align-items-center">
                                <img src={Iceauthor} className='img-fluid pb-2' />
                                <p className='p-3 pt-4' style={{color:'white'}}>By Gabie Sheber <span style={{ color: 'gray' }}>. May 22, 2020</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                
      </div>
    </div>
  )
}

export default twocolumnblogs
