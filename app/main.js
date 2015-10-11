import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

var rootInstance = ReactDOM.render(<Hello />, document.getElementById('app'));

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
