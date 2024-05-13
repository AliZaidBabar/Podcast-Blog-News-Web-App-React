import React from 'react'
import Amazonlogo from '../images/amazon-logo.png';
import Applelogo from '../images/apple-logo.png';
import Spotifylogo from '../images/spotify-logo.png';
function popularpodcastsection() {
    return (
        <div className='podcastpop container-fluid pt-5 pb-5'>
            <div className="row mt-5 pb-5">
                <div className="col-lg-6">

                </div>
                <div className="col-lg-6 pt-5">
                    <h1 style={{ fontSize: '60px' }} className='pt-5'><b>Most Popular Podcast Listening Platforms</b></h1>
                    <p>The owners of the celebrated little Gem Resorts bring their hopitality and unique vision to the caribbean</p>
                    <div className="row">
                    <div className="col-lg-3">
                        <div className="card" style={{backgroundColor:'transparent' ,color:'white' ,border:'none'}}>
                            <div className="card-body" >
                                <img src={Amazonlogo} className="img-fluid pe-3" />
                                <b>Amazon</b>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="card" style={{backgroundColor:'transparent' ,color:'white' ,border:'none'}}>
                            <div className="card-body" >
                                <img src={Applelogo} className="img-fluid pe-3" />
                                <b>Apple Podcast</b>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="card" style={{backgroundColor:'transparent' ,color:'white' ,border:'none'}}>
                            <div className="card-body" >
                                <img src={Spotifylogo} className="img-fluid pe-3" />
                                <b>Spotify</b>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
                

            </div>

        </div>
    )
}

export default popularpodcastsection
