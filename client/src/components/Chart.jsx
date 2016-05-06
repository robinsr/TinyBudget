import React from 'react';
import _ from 'lodash';
import ReactHighcharts from 'react-highcharts';

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

export default class Chart extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    const chart = this.refs.chart.getChart();
    const {showDetail} = this.props;
    const sel = chart.series[0].data.filter(data => data.id === showDetail)[0];

    if (sel) {
      sel.select();
    }
  }

  render() {
    const { categories, onClick } = this.props;

    const config = Object.assign({}, defaultConfig);

    const handleClick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      onClick(this.id);
    };

    _.set(config, 'series[0].point.events.click', handleClick);
    _.set(config, 'series[0].data', categories);

    return (
      <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
    );
  }
}