'use strict';

describe('PlayWithReactApp', function () {
  var React = require('react/addons');
  var PlayWithReactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PlayWithReactApp = require('components/PlayWithReactApp.js');
    component = React.createElement(PlayWithReactApp);
  });

  it('should create a new instance of PlayWithReactApp', function () {
    expect(component).toBeDefined();
  });
});
