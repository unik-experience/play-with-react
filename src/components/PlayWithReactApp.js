'use strict';

var React = require('react/addons');
var SalamAll = require('./SalamAll');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var PlayWithReactApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <SalamAll />
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = PlayWithReactApp;
