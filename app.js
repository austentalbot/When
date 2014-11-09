var Calendar = require('./components/calendar');
var React = require('react');
window.React = React;

React.render(React.createElement('div', {
    children: [Calendar({}), Calendar({}), Calendar({}), Calendar({})]
  }), document.getElementById('react'));
