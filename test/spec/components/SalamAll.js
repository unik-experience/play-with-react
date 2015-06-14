'use strict';

describe('SalamAll', function () {
  var React = require('react/addons');
  var SalamAll, component;

  beforeEach(function () {
    SalamAll = require('components/SalamAll.js');
    component = React.createElement(SalamAll);
  });

  it('should create a new instance of SalamAll', function () {
    expect(component).toBeDefined();
  });
});
