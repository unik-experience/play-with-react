'use strict';

var PlayWithReactApp = require('./PlayWithReactApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={PlayWithReactApp}>
    <Route name="/" handler={PlayWithReactApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
