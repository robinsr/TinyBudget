import React from 'react';
import TableRow from './TableRow.jsx';

export default class CategorySummary extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  renderCatSummary() {
    const { categories } = this.props;

    let total = categories.reduce((sum, cat) => sum + cat.y, 0);

    total = Math.round( total * 100 ) / 100;

    return (
      <table className="table watable">
        <thead>
          <tr>
            <th>Category</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{categories.map(category =>
          <tr>
            <td>{category.name}</td>
            <td>${category.y}</td>
          </tr>
        )}</tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    );
  }

  renderCatDetail() {
    const { showDetail } = this.props;
    const items = this.props.items
      .filter(item => item.category === showDetail)
      .map(item => <TableRow hideCategory={true} data={item} />);

    let total = this.props.items
      .filter(item => item.category === showDetail)
      .reduce((sum, item) => sum + item.amount, 0);

    total = Math.round( total * 100 ) / 100;

    return (
      <table className="table watable">
        <caption>{this.props.showDetail}</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>${total}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    );
  }

  render() {
    const {showDetail} = this.props;
    return this.props.showDetail ? this.renderCatDetail() : this.renderCatSummary()
  }
}
