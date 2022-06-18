import { useState } from 'react';
import dataSlider from '../dataSlider';
import SliderButton from './SliderButtons';
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => setSlideIndex(index);

  return (
    <div className='container-slider'>
      {dataSlider.map((obj, i) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === i + 1 ? 'slide active-anim' : 'slide'}
          >
            <img src={process.env.PUBLIC_URL + `img/img${i + 1}.jpg`} alt='' />
          </div>
        );
      })}
      <SliderButton moveSlide={nextSlide} direction={'next'} />
      <SliderButton moveSlide={prevSlide} direction={'prev'} />
      <div className='container-dots'>
        {Array.from({ length: dataSlider.length }).map((item, i) => (
          <div
            onClick={() => moveDot(i + 1)}
            className={slideIndex === i + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}
