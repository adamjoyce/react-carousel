import React from 'react';

const Slide = (props) => {
  const {visible, url} = props;
  const styles = {
    backgroundImage: `url(${props.url})`
  };
  return (
    props.visible === 'true'
      ? <li className="slide visible" style={styles}></li>
      : <li className="slide" style={styles}></li>
  );
};

function Slides(props) {
  const {slideData, currentSlideIndex} = props;
  return (
    <ul className="slide-panel">
      {slideData.map((data, index) =>
        index === currentSlideIndex
          ? <Slide key={index} url={data} visible='true' />
          : <Slide key={index} url={data} />
      )}
    </ul>
  );
}

export default Slides;
