import leftArrow from '../components/icons/left-arrow.svg';
import rightArrow from '../components/icons/right-arrow.svg';

export default function SliderButton(props) {
  return (
    <button
      onClick={props.moveSlide}
      className={
        props.direction === 'next' ? 'btn-slide next' : 'btn-slide prev'
      }
    >
      <img src={props.direction === 'next' ? rightArrow : leftArrow} alt='' />
    </button>
  );
}