import React from 'react'
import Landingsection from '../sections/landingsection';
import Scrollablemenu from '../sections/scrollablemenu';
import Upperblogsection from '../sections/upperblogsection';
import Testimonials from '../sections/testimonials';
import Twocolumnblogs from '../sections/twocolumnblogs';
import LowerblogsectionA from '../sections/lowerblogsectionA';
import Ourhostsection from '../sections/ourhostsection';
import Popularpodcastsection from '../sections/popularpodcastsection';
import Newslettersection from '../sections/newslettersection';


function Home() {
  return (
    <div className='Home '>
      <Landingsection/>
      <Scrollablemenu/>
      <Upperblogsection/>
      <Testimonials/>
      <Twocolumnblogs/>
      <LowerblogsectionA/>
      <Ourhostsection/>
      <Popularpodcastsection/>
      <Newslettersection/>
   
     
    </div>
  )
}

export default Home
