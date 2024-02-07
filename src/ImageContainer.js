import React from 'react';
import nextIcon from './images/icon-next.svg';
import previousIcon from './images/icon-previous.svg';


const ImageContainer = ({ selectedImage, handlePreviousImage, handleNextImage }) => {
  return (
    <div className="image-container-mobile" style={{ backgroundImage: `url(${selectedImage})` }}>
      <div className='icon-circle'>
        <img className="icon" src={previousIcon} alt='previous icon' onClick={handlePreviousImage}></img>
      </div>
      <div className='icon-circle'>
        <img className="icon" src={nextIcon} alt='next icon' onClick={handleNextImage}></img>
      </div>
    </div>
  );
};

export default ImageContainer;