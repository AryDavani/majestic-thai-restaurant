import React from 'react';

import image1 from '../images/herbs.jpg';
import image2 from '../images/more-herbs.jpg';


export default function HomeImg() {
  return (
    <div className="home-image">
      <img className="home-slides" src={ image1 } alt='homeImage1'/>
      <img className="home-slides" src={ image2 } alt='homeImage2'/>
    </div>
  )
}
