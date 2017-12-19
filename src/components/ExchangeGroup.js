import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ExchangeGroup.css';
import Exchange from './Exchange';

class ExchangeGroup extends Component {
  render() {
    const { ticks } = this.props;

    return (
      <div className="ExchangeGroup">
        {ticks.map(tick => {
          return <Exchange name={tick.exchange} data={tick.ticks} key={tick.exchange} />;
        })}
      </div>
    );
  }
}

Exchange.propTypes = {
  ticks: PropTypes.arrayOf(PropTypes.object)
};

export default ExchangeGroup;
