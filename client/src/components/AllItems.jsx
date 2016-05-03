import React from 'react';
import uuid from 'uuid-v4';
import moment from 'moment';

import TableRow from './TableRow.jsx'

export default class AllItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {now, items} = this.props;
    const headers = ['Date','Description','Category','Amount','','','',''];

    return (
      <div>
        <h2>All Items</h2>
        <table className="table watable table-bordered table-hover table-condensed">
          <thead>
            <tr>{headers.map(header => <th key={uuid()}>{header}</th>)}</tr>
          </thead>
          <tbody>{items.map(item => <TableRow key={item.id} data={item} />)}</tbody>
        </table>
      </div>
    );
  }
}
