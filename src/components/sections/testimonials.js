import React from 'react'
import Mark from '../images/mark.png'
import johnimg from '../images/johnimg.png'

function testimonials() {
    return (
        <div className='testimonials container-fluid mt-5 pb-5' style={{backgroundColor:'black'}}>
            <div className="row  justify-content-center pt-5 pb-5">
                <h1 className='text-center mt-5' style={{color:'white'}}><b>Testimonials</b></h1>
                <div className=" col-lg-3 pt-5 mt-5 testimonialcard1 me-3">
                    <img src={Mark} className='img-fluid'/>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="container text-center">
                    <img src={johnimg} className='img-fluid ' width={50} />
                    <p className='pt-2'>JOHN SMITH</p>
                    <p style={{fontSize:'smaller'}}>Founder of Awesomeux Technology</p>
                    </div>
                    
                </div>
                <div className="col-lg-3 pt-5 mt-5 testimonialcard2  me-3">
                <img src={Mark} className='img-fluid'/>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="container text-center">
                    <img src={johnimg} className='img-fluid ' width={50} />
                    <p className='pt-2'>JOHN SMITH</p>
                    <p style={{fontSize:'smaller'}}>Founder of Awesomeux Technology</p>
                    </div>
                    
                </div>
                <div className="col-lg-3 pt-5 mt-5 testimonialcard3  me-3">
                <img src={Mark} className='img-fluid'/>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="container text-center">
                    <img src={johnimg} className='img-fluid ' width={50} />
                    <p className='pt-2'>JOHN SMITH</p>
                    <p style={{fontSize:'smaller'}}>Founder of Awesomeux Technology</p>
                    </div>
                    
                </div>
            </div>
         


        </div>
    )
}

export default testimonials
