import React from 'react';
import Team1 from '../images/Team1.png';
import Bg from '../images/Bg.png';
import bg1 from '../images/bg1.png';
import bg2 from '../images/bg2.png';
import bg3 from '../images/bg3.png';
import bg4 from '../images/bg4.png';
import bg5 from '../images/bg5.png';
import bg6 from '../images/bg6.png';
import bg7 from '../images/bg7.png';
import Newslettersection from '../sections/newslettersection';


const imageGalleryData = [
  {
    url: Bg,
    title: "Jenny Wilson",
    description: "CEO & Founder of Gilio"
  },
  {
    url: bg1,
    title: "Brooklyn Simmons",
    description: "Product Designer"
  },
  {
    url: bg2,
    title: "Darlene Robertson",
    description: "Product Designer"
  },
  {
    url: bg3,
    title: "Jane Cooper",
    description: "UI Designer"
  },
  {
    url: bg4,
    title: "Eleanor Pena",
    description: "UX Designer"
  },
  {
    url: bg5,
    title: "Theresa Webb",
    description: "UX Designer (Intern)"
  },
  {
    url: bg6,
    title: "Albert Flores",
    description: "Front-end Developer"
  },
  {
    url: bg7,
    title: "Wade Warren",
    description: "Front-end Developer"
  }
];

const TeamPage = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Block 1 */}
      <div className="mb-8 h-88 rounded-lg overflow-hidden">
        <img src={Team1} alt="Team" className="w-full h-full object-cover" />
      </div>

      {/* Block 2 */}
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 pr-4">
          <h2 className="font-bold mb-4 text-blue-900" style={{ fontFamily: 'Inter', fontSize: '56px', fontWeight: 700, lineHeight: '60px', letterSpacing: '-0.02em', textAlign: 'left' }}>Say to our incredible<br/> team members.</h2>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between items-end">
          <p className="font-inter text-base font-normal leading-7 text-left text-gray-700 mb-4">
            Praesent sagittis eros in convallis rutrum. Donec<br/> auctor nibh justo. Vestibu tincidunt, libero sit.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[177px] h-[48px] gap-12 border-r-0 border-b-0 border-l-0 border-green-500 ml-2">
            Join Our Team
          </button>
        </div>
      </div>

      {/* Block 3 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageGalleryData.map((image, index) => (
          <div key={index}>
<img
  src={image.url}
  alt={image.title}
  className="w-full h-264 rounded-lg"
  style={{ width: '238.62px' }}
/>


<h3 className="text-base font-semibold leading-7 tracking-tighter text-blue-900 ml-2">{image.title}</h3>
<p className="text-base font-normal leading-6 text-gray-600 ml-2">{image.description}</p>


          </div>
        ))}
      </div>
      <Newslettersection/>

    </div>
  );
};

export default TeamPage;
