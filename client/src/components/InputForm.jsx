import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';

import ItemActions from '../actions/ItemActions';

const blankState = {
  description: '',
  amount: 0,
  category: 'cat1',
  date: moment().toISOString(),
  errMsg: '',
  isPay: false
};

export default class InputForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = Object.assign({}, blankState);
  }

  addItem = (e) => {
    e.preventDefault();

    const { description, amount, category, date } = this.state;
    
    ItemActions.create({ description, amount, category, date });

    this.setState(Object.assign({}, blankState));
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleAmountChange = (e) => {
    this.setState({ amount: parseInt(e.target.value, 10) });
  }

  handleDateChange = (val) => {
    this.setState({ date: val.toISOString() });
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  }

  toggleExpense = (e) => {
    e.preventDefault();
    this.setState({ isPay: false });
  }

  togglePayday = (e) => {
    e.preventDefault();
    this.setState({ isPay: true });
  }

  render() {
    const expenseClassNames = classNames({
      'expense-or-payday': true,
      'active': !this.state.isPay
    });

    const paydayClassNames = classNames({
      'expense-or-payday': true,
      'active': this.state.isPay
    })
    return (
      <div className="input-div-container">
        <ul className="nav nav-pills">
          <li className={expenseClassNames}><a href="#" onClick={this.toggleExpense}>Input an Item</a></li>
          <li className={paydayClassNames}><a href="#" onClick={this.togglePayday}>Payday!</a></li>
        </ul>
        <form className="form-inline input_form" onSubmit={this.addItem}>
          <input 
            className="input-medium"
            type="text"
            placeholder="Description" 
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input
            className="input-medium"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <select 
            className="input-medium"
            value={this.state.category}
            onChange={this.handleCategoryChange}
          >
            <option value="cat1">Cat1</option>
          </select>
          <DatePicker
            className="input-medium"
            onChange={this.handleDateChange}
            startDate={moment()}
            selected={moment(this.state.date)}
          />
          <button type="submit" className="btn btn-primary btn-mini">Add</button>
        </form>
        <div id="input_error_div">{this.state.errMsg}</div>
      </div>
    );
  }
}
