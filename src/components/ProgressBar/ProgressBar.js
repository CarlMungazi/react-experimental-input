import React from 'react';
import PropTypes from 'prop-types';

import { getWidthAsPercentOfTotalWidth } from '../../utils/percentUtils';

/** A standard progress bar component */
class ProgressBar extends React.Component {
  getColor = (percent) => {
    if (this.props.percent === 100) return 'green';
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  }

  render() {
    const { percent, width, height } = this.props;

    return (
      <div className="test" style={{border: '1px solid lightgray', width: width}}>
        <div
          style={{
            width: getWidthAsPercentOfTotalWidth(percent, width),
            height,
            backgroundColor: this.getColor(percent)
          }}
        />
      </div>
    )
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;