import React from 'react';
import moment from 'moment';

export default class MonthSelctor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const month = this.props.now.format('MMMM');
    const year = this.props.now.format('YYYY');

    return (
      <div className="month-select-container">
        <p className="lead">Month:</p>
        <div className="form-inline month-select" id="tour_month_select">
          <button type="button" className="btn btn-inverse btn-mini pull-left" onClick={this.props.onDec}>
            <i className="icon-chevron-left icon-white"></i>
          </button>
          <span>{month}</span>, <span>{year}</span>
          <button type="button" className="btn btn-inverse btn-mini pull-right" onClick={this.props.onInc}>
            <i className="icon-chevron-right icon-white"></i>
          </button>
        </div>
      </div>
    );
  }
}
