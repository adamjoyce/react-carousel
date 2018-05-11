import React from 'react';
import PropTypes from 'prop-types';

const Slide = (props) => {
  const {visible, url} = props;
  const styles = {
    backgroundImage: `url(${url})`
  };
  return (
    visible === true
      ? <li className="slide visible" style={styles}></li>
      : <li className="slide" style={styles}></li>
  );
};

Slide.propTypes = {
  visible: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
}

Slide.defaultProps = {
  visible: false
}

function Slides(props) {
  const {slideData, currentSlideIndex} = props;
  return (
    <ul className="slide-panel">
      {slideData.map((data, index) =>
        index === currentSlideIndex
          ? <Slide key={index} url={data} visible={true} />
          : <Slide key={index} url={data} />
      )}
    </ul>
  );
}

Slides.propTypes = {
  slideData: PropTypes.array.isRequired,
  currentSlideIndex: PropTypes.number.isRequired
}

export default Slides;
