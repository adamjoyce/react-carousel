import React from 'react';
import PropTypes from 'prop-types';

// import ProgressBar from './ProgressBar';

const ProgressBar = (props) => {
  const styles = {
    WebkitAnimation: 'progress 3s linear infinite',
    animation: 'progress 3s linear infinite'
  }
  return (
    <div className="progress-bar" style={styles}></div>
  );
};

ProgressBar.propTypes = {
  slideDelay: PropTypes.number.isRequired
}

const Pip = (props) => {
  const {activePip} = props;
  return (
    activePip === true
      ? <span className="fa-layers fa-fw">
          <i className="far fa-circle"></i>
          <i className="fas fa-circle" data-fa-transform="shrink-6"></i>
        </span>
      : <span className="fa-layers fa-fw">
          <i className="far fa-circle"></i>
          <i className="fas fa-circle hidden" data-fa-transform="shrink-6"></i>
        </span>
  );
};

Pip.propTypes = {
  activePip: PropTypes.bool.isRequired
}

Pip.defaultProps = {
  activePip: false
}

function Pipbar(props) {
  const {slideData, currentSlideIndex, slideDelay} = props;
  return (
    <div className="pipbar">
      <div className="progress-wrapper">
        {/* TODO: Use fontawesome npm library instead of Math.random to
            re-render svgs. */}
        {slideData.map((item, index) =>
          index === currentSlideIndex
            ? <Pip key={index + Math.random()} activePip={true} />
            : <Pip key={index + Math.random()} />
        )}
        <ProgressBar slideDelay={slideDelay} />
      </div>
    </div>
  );
}

Pipbar.propTypes = {
  slideData: PropTypes.array.isRequired,
  currentSlideIndex: PropTypes.number.isRequired,
  slideDelay: PropTypes.number.isRequired
}

export default Pipbar;
