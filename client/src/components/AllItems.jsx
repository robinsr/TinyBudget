import React from 'react';
import uuid from 'uuid-v4';

import ItemStore from '../stores/ItemStore';

import TableRow from './TableRow.jsx'

export default class AllItems extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = ItemStore.getState();
  }

  storeChanged = (state) => {
    this.setState(state);
  }

  componentDidMount() {
    ItemStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    ItemStore.unlisten(this.storeChanged);
  }

  render() {
    const {items} = this.state;

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
