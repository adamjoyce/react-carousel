import React from 'react';
import PropTypes from 'prop-types';

import Slides from './Slides';
import Pipbar from './Pipbar';

const slideData = [
  "http://4.bp.blogspot.com/-Tb_CuuQ9s1I/T9sCdXaRy2I/AAAAAAAAAiM/6WRl1Mk3q5g/s1600/Cute-Kitten-kittens-Licking-1280x800.jpg",
  "http://images4.fanpop.com/image/photos/16000000/Cute-Kitten-kittens-16096566-1280-800.jpg",
  "https://www.hdwallpapers.in/walls/cute_kitten-wide.jpg"
]

const Arrow = ({direction, onClickFunction}) => (
  <div
    className={`arrow ${direction}`}
    onClick={onClickFunction}>
    {direction === 'left'
      ? <i className="fas fa-angle-left"></i>
      : <i className="fas fa-angle-right"></i>}
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
      timer: null
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    this.state.timer = setInterval(() => {
      console.log('CHANGE');
      return this.nextSlide();
    }, this.props.slideDelay);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  // Sets the previous image slide index accounting for wrap-around.
  previousSlide() {
    const {currentSlideIndex} = this.state;
    const newIndex = (
      currentSlideIndex === 0
        ? slideData.length - 1
        : currentSlideIndex - 1
    );
    this.setState(() => ({currentSlideIndex: newIndex}));
  }

  // Sets the next image slide index accounting for wrap-around.
  nextSlide() {
    const {currentSlideIndex} = this.state;
    const lastIndex = slideData.length - 1;
    const newIndex = (
      currentSlideIndex === lastIndex
        ? 0
        : currentSlideIndex + 1
    );
    this.setState(() => ({currentSlideIndex: newIndex}));
  }

  render() {
    const {slideDelay} = this.props;
    const {currentSlideIndex} = this.state;
    return (
      <div className="carousel">
        <Arrow direction="left" onClickFunction={this.previousSlide} />
        <Arrow direction="right" onClickFunction={this.nextSlide} />
        <Pipbar
          slideData={slideData}
          currentSlideIndex={currentSlideIndex}
          slideDelay={slideDelay}
        />
        <Slides slideData={slideData} currentSlideIndex={currentSlideIndex} />
      </div>
    );
  }
}

Carousel.propTypes = {
  slideDelay: PropTypes.number.isRequired
}

Carousel.defaultProps = {
  slideDelay: 3000
}

export default Carousel;
