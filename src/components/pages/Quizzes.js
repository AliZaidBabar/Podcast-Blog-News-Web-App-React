import React from 'react';
import Quiz from '../images/Quiz.png';
import Popularpodcastsection from '../sections/popularpodcastsection';
import Scrollablemenu from '../sections/scrollablemenu';
import Newslettersection from '../sections/newslettersection';

const QuizzesPage = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Block 1 */}
      <div className="mb-8 h-88 rounded-lg overflow-hidden">
        <img src={Quiz} alt="Team" className="w-full h-full object-cover" />
      </div>
      
      <p className="text-center text-gray-600 mb-4">Page is under construction</p>
      
      <Popularpodcastsection/>
      <Scrollablemenu/>
      <Newslettersection/>
    </div>
  );
};

export default QuizzesPage;
