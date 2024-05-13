import React from 'react'
import mainhost from '../images/mainhost.png';
import secondhost from '../images/host2.png';
import thirdhost from '../images/host3.png';
import fourthhost from '../images/host4.png';
function ourhostsection() {
    return (
        <div className='ourhosts container pt-5 pb-5'>

            <div className="row justify-content-center ">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='text-start' style={{ fontWeight: '600' }}>Our host</h1>
                        <p className='text-start' style={{ fontWeight: '500' }}>Choose host for listening podcast</p>

                    </div>
                    <div className="col-lg-6 text-end">
                        <button type="button" class="btn btn-nav btn-primary ps-4 pe-4 pt-2 pb-2 mt-3">See More</button>


                    </div>
                </div>

                <div className="col-lg-4">

                    <img src={mainhost} className='img-fluid' />
                </div>
                <div className="col-lg-2">
                    <img src={secondhost} className='img-fluid' />

                </div>
                <div className="col-lg-2">
                    <img src={thirdhost} className='img-fluid' />

                </div>
                <div className="col-lg-2">
                    <img src={fourthhost} className='img-fluid' />
                </div>
                <div className="col-lg-2">
                    <img src={fourthhost} className='img-fluid' />
                </div>
            </div>

        </div>
    )
}

export default ourhostsection
