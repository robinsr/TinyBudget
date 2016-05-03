import React from 'react';

export default class MenuBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const name = 'Ryan';
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="container">
            <a className="brand" href="#">Tiny Budget</a>
            <div className="nav-collapse collapse">
              <p className="nav navbar-text">Logged in as {name}</p>
                <p className="nav navbar-text"><a href="#">edit</a></p>
                <div className="navbar-form pull-right in_nav">
                  <button type="button" className="btn">Upload CSV File</button>
                  <button type="button" className="btn">Stats</button>
                  <button type="button" className="btn">Edit Categories</button>
                  <button type="button" className="btn">Logout</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
