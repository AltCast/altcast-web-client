import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Exchange.css';
import groupBy from 'lodash/groupBy';

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.groupedTicks = this.groupedTicks.bind(this);
    this.formatPercentage = this.formatPercentage.bind(this);
  }

  formatPercentage(percentage) {
    const newValue = parseFloat(percentage * 100);
    const status = newValue >= 0 ? 'positive' : 'negative';

    return <span className={status}>{newValue}%</span>;
  }

  groupedTicks() {
    return groupBy(this.props.data, 'name')['BTC'];
  }

  render() {
    return (
      <div className="Exchange">
        <div className="Exchange-header">
          <h2 title={this.props.name}>{ this.props.name }</h2>
        </div>
        <div className="Exchange-content">
          <h3 title="Bitcoin (BTC)">Bitcoin (BTC)</h3>
          {this.groupedTicks().map(tick => {
            return <div key={tick.name}>{tick.lastTick.last_price } {tick.pair.split('/')[1] } {this.formatPercentage(tick.lastTick.daily_percent) }</div>
          })}
        </div>
      </div>
    );
  }
}

Exchange.propTypes = {
  name: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Exchange;
