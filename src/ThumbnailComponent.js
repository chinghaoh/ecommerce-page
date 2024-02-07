import React from 'react';

const Thumbnail = ({ src, alt, onClick }) => {
  return <img className='thumbnail' src={src} alt={alt} onClick={onClick}></img>;
};

export default Thumbnail;