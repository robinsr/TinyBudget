import React from 'react';

export default class CategorySummary extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  renderCatSummary() {
    return <div>summary</div>
  }

  renderCatDetail() {
    return <div>{this.props.showDetail}</div>
  }

  render() {
    const {showDetail} = this.props;
    return this.props.showDetail ? this.renderCatDetail() : this.renderCatSummary()
  }
}
