'use strict';

import React from 'react';
import moment from 'moment';

import MenuBar from './MenuBar.jsx';
import InputForm from './InputForm.jsx';
import MonthSelctor from './MonthSelctor.jsx';
import CategorySummary from './CategorySummary.jsx';
import Chart from './Chart.jsx';
import AllItems from './AllItems.jsx';

import ItemStore from '../stores/ItemStore';
import connectToStores from 'alt-utils/lib/connectToStores';

class App extends React.Component {
  static getStores() {
    return [ItemStore];
  }

  static getPropsFromStores() {
    return ItemStore.getState();
  }

  constructor() {
    super();
    this.state = {
      now: moment(),
      showDetail: null,
      modal: null
    }
  }

  incMonth = () => {
    this.setState({
      now: moment(this.state.now).add(1, 'month')
    });
  }

  decMonth = () => {
    this.setState({
      now: moment(this.state.now).subtract(1, 'month')
    });
  }

  handleClick = (catName) => {
    this.setState({
      showDetail: catName === this.state.showDetail ? false : catName
    });
  }

  render() {
    const {now, showDetail} = this.state;

    const items = this.props.items.filter(item => {
      const m = moment(item.date);
      return m.isSame(now, 'year') && m.isSame(now, 'month');
    });

    const categories = _.chain(items).groupBy('category').map(items => {
      const y = _.reduce(items, (sum, item) => {
        return Math.round((sum + item.amount) * 100) / 100;
      }, 0);

      return {
        name: items[0].category,
        id: items[0].category,
        y
      }
    }).value();

    return (
      <div>
        <MenuBar />
        <div className="container">
          <div className="row">
            <div className="span9">
              <InputForm />
            </div>
            <div className="span3">
              <MonthSelctor onInc={this.incMonth} onDec={this.decMonth} now={now} />
            </div>
          </div>
          <div className="row">
            <div className="span5">
              <CategorySummary categories={categories} items={items} showDetail={showDetail} />
            </div>
            <div className="span7">
              <Chart items={items} categories={categories} onClick={this.handleClick} showDetail={showDetail} />
            </div>          
          </div>
          <div className="row">
            <div className="span12">
              <AllItems items={items} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectToStores(App);