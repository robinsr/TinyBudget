import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import ItemActions from './actions/ItemActions';

ReactDOM.render(<App />, document.getElementById('app-root'))

ItemActions.fetchItems();