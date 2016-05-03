import React from 'react';
import moment from 'moment';

export default class TableRow extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {date, description, amount, category} = this.props.data;

    return (
      <tr>
        <td>{moment(date).format('MM/DD/YYYY')}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td><i className="icon-remove"></i></td>
        <td><i className="icon-flag"></i></td>
        <td><i className="icon-comment"></i></td>
        <td><i className="icon-pencil"></i></td>
      </tr>
    );
  }
}
