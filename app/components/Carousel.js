import React from 'react';

const imageUrls = [
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

const Slide = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`
  }
  return (
    <div className="slide" style={styles}></div>
  );
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  // Sets the previous image slide index accounting for wrap-around.
  previousSlide() {
    const {currentImageIndex} = this.state;
    const newIndex = (
      currentImageIndex === 0
        ? imageUrls.length - 1
        : currentImageIndex - 1
    );
    console.log(newIndex);
    this.setState(() => ({currentImageIndex: newIndex}));
  }

  // Sets the next image slide index accounting for wrap-around.
  nextSlide() {
    const {currentImageIndex} = this.state;
    const lastIndex = imageUrls.length - 1;
    const newIndex = (
      currentImageIndex === lastIndex
        ? 0
        : currentImageIndex + 1
    );
    this.setState(() => ({currentImageIndex: newIndex}));
  }

  render() {
    const {currentImageIndex} = this.state;
    console.log(imageUrls[currentImageIndex]);
    return (
      <div className="carousel">
        <Arrow direction="left" onClickFunction={this.previousSlide} />
        <Arrow direction="right" onClickFunction={this.nextSlide} />
        <Slide url={imageUrls[currentImageIndex]} />
      </div>
    );
  }
}

export default Carousel;
