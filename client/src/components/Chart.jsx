import React from 'react';
import _ from 'lodash';
import ReactHighcharts from 'react-highcharts';
import ItemStore from '../stores/ItemStore';
import connectToStores from 'alt-utils/lib/connectToStores';

const defaultConfig = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
  },
  title: {
    text: ''

  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    pie: {
      animation: true,
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        color: '#000000',
        connectorColor: '#000000',
        formatter: function () {
          return '<b>' + this.point.name + '</b>: $' + this.point.y;
        }
      }
    }
  },
  series: [{
    type: 'pie',
    data: [], // add data here
    point: {
    }
  }]
};

class Chart extends React.Component {
  static getStores() {
    return [ItemStore];
  }

  static getPropsFromStores() {
    return ItemStore.getState();
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    const config = Object.assign({}, defaultConfig);

    config.series[0].data = _.chain(items).groupBy('category').map(items => {
      const y = _.reduce(items, (sum, item) => {
        return sum + item.amount;
      },0);

      return {
        name: items[0].category,
        id: items[0].category,
        y
      }
    }).value();

    return (
      <ReactHighcharts config={config}></ReactHighcharts>
    );
  }
}

export default connectToStores(Chart)
