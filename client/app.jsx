const React = require('react');
const ReactDOM = require('react-dom');
const Test = require('./components/test.jsx');
ReactDOM.render(<Test data='test data passed through props'/>, document.getElementById('container'));
