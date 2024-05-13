import React from 'react'
import footerlogo from './images/footerlogo.png'
import icons from './images/icons.png'
import grid from './images/grid.png'
function footer() {
    return (
        <div className="footer container-fluid" style={{ backgroundColor: 'black', color: 'white' }}>
            <footer className="py-5 text-center text-sm-start"> {/* Added text-center and text-sm-start classes */}
                <div className="row border-bottom">
                    <div className="col-md-6 offset-md-1 mb-3">

                        <div className="container mt-2">
                            <img src={footerlogo} className='img-fluid' />
                            <h5 className='pt-3'>DISSECTING POPULAR IT NERDS</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p className='text-sm '>A revolutionary podcast focused on solving IT challenges and growing the value of IT.</p>
                                    <img src={icons} className='img-fluid' />
                                    <img src={grid} className='img-fluid pt-3' />


                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="col-6 col-md-2 mb-3 pt-5 mt-4">
                        <h5>Recent Episodes</h5>
                        <ul className="nav flex-column pt-3 " >
                            <li className="items nav-item mb-2" ><a href="#" className="items nav-link p-0 text-body-secondary text-sm" >Home</a></li>
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">Contact us</a></li>
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">Join us</a></li>
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">Complaints &  Recommendations</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3 pt-5 mt-4 pb-5" >
                        <h5>Industry</h5>
                        <ul className="nav flex-column pt-3">
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">Homepage</a></li>
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">About</a></li>
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">Episodes</a></li>
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">E-books</a></li>
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">Quiz</a></li>
                            <li className="items nav-item mb-2"><a href="#" className="items nav-link p-0 text-body-secondary text-sm">Blog</a></li>
                        </ul>
                    </div>
                    
                </div>
                
            </footer>
        </div>
    )
}

export default footer
