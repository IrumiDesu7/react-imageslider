import { useState } from 'react';
// import dataSlider from '../dataSlider';

export default function Slider() {
  const [image, setImage] = useState(1);

  function nextImage() {
    image !== 5 ? setImage(image + 1) : setImage(1);
  }
  function prevImage() {
    image !== 1 ? setImage(image - 1) : setImage(5);
  }

  return (
    <div className='sliderContainer'>
      <img
        src={`${process.env.PUBLIC_URL}/img/img${image}.jpg`}
        alt='slider images'
      />
      <div className='buttonContainer'>
        <button onClick={prevImage}>Prev</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}
