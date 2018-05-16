import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   barWidth: ''
    // }
    // this.setBarWidth = this.setBarWidth.bind(this);
  }

  componentDidMount() {
    // This makes the progress bar and slide change out-of-sync.
    // TODO: set the progress bar css3 animation in the same setInterval
    // as the slide change.
    this.props.startAutoSlide();
  }

  // Sets the current width of the progress bar.
  // setBarWidth(barWidth) {
  //   this.setState(() => ({barWidth}));
  // }

  render() {
    const {slideDelay, barWidth} = this.props;
    const styles = {
      WebkitAnimation: `progress ${slideDelay/1000}s linear infinite`,
      animation: `progress ${slideDelay/1000}s linear infinite`
      // width: `${barWidth}px`
    }
    return (
      <div className="progress-bar" /*style={styles}*/></div>
    );
  }
}

ProgressBar.propTypes = {
  slideDelay: PropTypes.number.isRequired,
  startAutoSlide: PropTypes.func.isRequired
}

export default ProgressBar;
