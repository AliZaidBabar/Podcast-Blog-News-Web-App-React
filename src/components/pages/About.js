// AboutPage.js

import React from 'react';
import mic from '../images/mic.png';
import mic1 from '../images/mic1.png';
import iceskatingimg from '../images/iceskatingimg.png';
import Scrollablemenu from '../sections/scrollablemenu';
import Newslettersection from '../sections/newslettersection';

import laptop from '../images/laptop.png';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import Iceauthor from '../images/iceauthor.png'
const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Image */}
      <div className="bg-cover bg-center h-full w-128 flex items-center justify-center relative font-sans">
  <div class="absolute inset-0 flex items-center justify-center">
    <h2 class="text-white text-7xl font-bold text-center leading-[92.8px]">About Us</h2>
  </div>
  <div className="px-8">
    <img src={mic} alt="Rectangle" className="object-cover w-auto h-96 rounded-lg" />
  </div>
</div>


      {/* Block 1 */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-8">
          <h2 className="font-open-sans text-3xl font-bold mb-4 text-left" style={{ fontFamily: 'Open Sans', fontSize: '36px', fontWeight: 700, lineHeight: '46px', textAlign: 'left' }}>BREAK INTO THE TOP 5%</h2>

            <p className="text-gray-700 font-open-sans text-sm font-normal leading-[19.07px] mb-6">
    In the Old Days… IT guys hid in the server room swapping out tape drives. End-users slid pizzas under the door in hopes of a password reset. Face to face interaction with humanoids seemed medieval.<br/><br/>
    But times have changed, today there is a new generation of leadership that understands the importance of technology.<br/><br/>
    However, many CEOs are failing to develop IT talent into leaders.  Which makes one wonder… <br/><br/>
    “Why would a CEO NOT want <strong>one of the few people who has full visibility across the entire business… all departments… all systems, and… all groups of people</strong> sitting next to him at the executive round table?” <br/><br/>
    Listen now! Find out how your peers are impacting the business world and influencing company culture, without sacrificing work-life balance.<br/><br/>
    Join the new IT elite and go further faster by getting invited to our backend community.
</p>



          </div>
          <div className="md:w-1/2 p-8">
            <img src={iceskatingimg} alt="Image 1" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

{/* Block 2 */}
<div className="py-12 px-4 bg-primary-tint/300">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
    <div className="md:w-1/2 p-8">
      <img src={laptop} alt="Image 2" className="w-full h-auto rounded-lg" />
    </div>
    <div className="md:w-1/2 p-8">
    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Open Sans', fontSize: '36px', fontWeight: 700, lineHeight: '46px', textAlign: 'left' }}>IT leadership is not easy</h2>

    <ul className="list-disc" style={{ fontFamily: 'Open Sans', fontSize: '14px', fontWeight: 400, lineHeight: '19.07px', textAlign: 'left', color: '#535D73' }}>
    <p>The modern IT professional faces dozens of challenges:</p>
    <li>Constant pressure to train & support end-users</li>
    <li>Remote workforce management</li>
    <li>The dark forces of shadow IT</li>
    <li>Unresolved QOS issues</li>
    <li>Ransomware attacks</li>
    <li>Budget constraints</li>
    <li>GDPR, HIPAA, PCI, SOC</li>
    <li>Decision/direction planning overwhelm</li>
    <li>Managing time & balancing task switching.</li>
    <li>Licensing issues prevent fast flexible scalability</li>
    <li>Providers don’t give a flip about horrible tech-support</li>
    <li>Legacy Silos printing tickets for your help desk</li>
    <li>Selling big upgrades to executive management.</li>
</ul>

    </div>
  </div>
</div>


      {/* Block 1 */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-8">
          <h2 className="font-open-sans text-3xl font-bold mb-4 text-left" style={{ fontFamily: 'Open Sans', fontSize: '36px', fontWeight: 700, lineHeight: '46px', textAlign: 'left' }}>The End-user metaphor</h2>

          <p className="text-gray-700 font-open-sans text-sm font-normal leading-[19.07px] mb-6" style={{ color: '#535D73' }}>
    The average end-user to IT staff ratio is around 100:1 (what I have observed). IT professionals are the teachers tasked with educating hundreds of different minds crammed into one classroom.<br/><br/>
    Modern day IT leaders are tasked with protecting the company from harm. They must protect end-users from themselves. Further IT leadership (too-often) has to balance meeting unrealistic expectations from executive management.<br/><br/>
    The average end-user to IT staff ratio is around 100:1 (what I have observed). IT professionals are the teachers tasked with educating hundreds of different minds crammed into one classroom.<br/><br/>
    Modern day IT leaders are tasked with protecting the company from harm. They must protect end-users from themselves. Further IT leadership (too-often) has to balance meeting unrealistic expectations from executive management.
</p>





          </div>
          <div className="md:w-1/2 p-8">
            <img src={mic1} alt="Image 1" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

{/* Block 2 */}
<div className="py-12 px-4 bg-primary-tint/300">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
    <div className="md:w-1/2 p-8">
      <img src={iceskatingimg} alt="Image 2" className="w-full h-auto rounded-lg" />
    </div>
    <div className="md:w-1/2 p-8">
    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Open Sans', fontSize: '36px', fontWeight: 700, lineHeight: '46px', textAlign: 'left' }}>Join the revolution</h2>
    <p className="text-gray-700 font-open-sans text-sm font-normal leading-[19.07px] mb-6" style={{ color: '#535D73' }}>
    Dissecting Popular IT Nerds is looking for Technology Professionals with unique skills and stories to tell.  Apply to be on the show now.  Join your colleagues helping to influence the business world.<br/><br/>
    Dissecting Popular IT Nerds is looking for Technology Professionals with unique skills and stories to tell.  Apply to be on the show now.  Join your colleagues helping to influence the business world.<br/><br/>
    Dissecting Popular IT Nerds is looking for Technology Professionals with unique skills and stories to tell.  Apply to be on the show now.  Join your colleagues helping to influence the business world.
</p>

   

    </div>
  </div>
</div>
<div className='twocolblogsection container-fluid' style={{ backgroundColor:'#091737', border:'none' }}>
  <div className="row justify-content-center pt-5">
    <div className="col-lg-4 pb-3 ">
      <div className="card iceblogcard " style={{ backgroundColor:'#091737', border:'none' }}>
        <img src={img1} className="card-img-top iceimg" alt="..." />
        <div className="card-body">
          <h4 className="card-text iceheading" style={{ color:'white' }}>Boeser says report of potential trade from Canucks </h4>
          <div className="container d-flex align-items-center">
            <img src={Iceauthor} className='img-fluid pb-2' />
            <p className='p-3 pt-4' style={{ color:'white' }}>By Gabie Sheber <span style={{ color: 'gray' }}>. May 22, 2020</span></p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 pb-3">
      <div className="card iceblogcard " style={{ backgroundColor:'#091737', border:'none' }}>
        <img src={img2} className="card-img-top iceimg" alt="..." />
        <div className="card-body">
          <h4 className="card-text iceheading" style={{ color:'white' }}>Training camp preview: Rookies under the radar entering Qualifiers</h4>
          <div className="container d-flex align-items-center">
            <img src={Iceauthor} className='img-fluid pb-2' />
            <p className='p-3 pt-4' style={{ color:'white' }}>By Gabie Sheber <span style={{ color: 'gray' }}>. May 22, 2020</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Scrollablemenu/>
<Newslettersection/>

    </div>
  );
};

export default AboutPage;
