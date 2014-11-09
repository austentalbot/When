var React = require('react');

var Calendar = React.createClass({
  render: function() {
    return React.createElement('div', {
      className: 'box',
      children: [
        React.createElement('div', {
          className: 'box2'
        })
      ]
    });
  }
});

module.exports = Calendar;
