import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startAutoSlide();
  }

  render() {
    const {slideDelay} = this.props;
    const styles = {
      WebkitAnimation: `progress ${slideDelay/1000}s linear infinite`,
      animation: `progress ${slideDelay/1000}s linear infinite`
    }
    return (
      <div className="progress-bar" style={styles}></div>
    );
  }
}

ProgressBar.propTypes = {
  slideDelay: PropTypes.number.isRequired,
  startAutoSlide: PropTypes.func.isRequired
}

export default ProgressBar;
