'use strict';

import React from 'react';
import moment from 'moment';

import MenuBar from './MenuBar.jsx';
import InputForm from './InputForm.jsx';
import MonthSelctor from './MonthSelctor.jsx';
import CategorySummary from './CategorySummary.jsx';
import Chart from './Chart.jsx';
import AllItems from './AllItems.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      now: moment()
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

  render() {
    const {now} = this.state;

    return(<div>
      <MenuBar />
      <div className="container">
        <div className="row">
          <div className="span8">
            <InputForm />
          </div>
          <div className="span4">
            <MonthSelctor onInc={this.incMonth} onDec={this.decMonth} now={now}/>
          </div>
        </div>
        <div className="row">
          <div className="span5">
            <CategorySummary />
          </div>
          <div className="span7">
            <Chart />
          </div>          
        </div>
        <div className="row">
          <div className="span12">
            <AllItems />
          </div>
        </div>
      </div>
    </div>);
  }
}