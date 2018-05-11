import React from 'react';
import PropTypes from 'prop-types';

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
  const {slideData, currentSlideIndex} = props;
  return (
    <div className="pipbar">
      {/* TODO: Use fontawesome npm library instead of Math.random to
          re-render svgs. */}
      {slideData.map((item, index) =>
        index === currentSlideIndex
          ? <Pip key={index + Math.random()} activePip={true} />
          : <Pip key={index + Math.random()} />
      )}
    </div>
  );
}

Pipbar.propTypes = {
  slideData: PropTypes.array.isRequired
}

export default Pipbar;
