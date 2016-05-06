import React from 'react';
import moment from 'moment';

export default class TableRow extends React.Component {
  static propTypes = {
    hideCategory: React.PropTypes.boolean,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { hideCategory, data: { date, description, amount, category } } = this.props;
    const categoryCell = hideCategory ? undefined : <td>{category}</td>

    return (
      <tr>
        <td>{moment(date).format('MMM Do, YYYY')}</td>
        <td>{description}</td>
        {categoryCell}
        <td>${amount}</td>
        <td><i className="icon-remove"></i></td>
        <td><i className="icon-flag"></i></td>
        <td><i className="icon-comment"></i></td>
        <td><i className="icon-pencil"></i></td>
      </tr>
    );
  }
}
