import React from "react";
import Amazonlogo from '../images/amazon-logo.png';
import Applelogo from '../images/apple-logo.png';
import ListenNotes from '../images/listen-logo.png';
import OwlTail from '../images/owl-logo.png';
import Rsslogo from '../images/rss-logo.png';
import Spotifylogo from '../images/spotify-logo.png';

function scrollablemenu() {
  return (
    <div className="scroll-menu container-fluid mt-5 p-3" >
      <div className="row">
        <div className="col-lg-2">
          <div className="card">
            <div className="card-body" >
                <img src={Amazonlogo} className="img-fluid pe-3"/>
              <b>Amazon</b>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card">
            <div className="card-body">
            <img src={Applelogo} className="img-fluid pe-3"/>
            <b>Apple Podcasts</b>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card">
            <div className="card-body">
            <img src={ListenNotes} className="img-fluid pe-3"/>
            <b>Listen Notes</b>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card">
            <div className="card-body">
            <img src={OwlTail} className="img-fluid pe-3"/>
            <b>OwlTail</b>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card">
            <div className="card-body">
            <img src={Rsslogo} className="img-fluid pe-3"/>
            <b>Rss</b>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card">
            <div className="card-body">
            <img src={Spotifylogo} className="img-fluid pe-3"/>
            <b>Spotify</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default scrollablemenu;
