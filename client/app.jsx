const ROOT_PATH = '/admin';
const React = require('react');
const ReactDOM = require('react-dom');
const {Router, Route, IndexRoute} = require('react-router');


const Test = require('./pages/test.jsx');
const Main = require('./pages/main.jsx');

var history = require('./util/history')(ROOT_PATH);
const App = React.createClass({
    displayName: 'App',
    propTypes: {
        children: React.PropTypes.node,
        history: React.PropTypes.object.isRequired
    },
    onClick: function() {
        this.props.history.push('test');
    },
    render: function() {
        // Don't render children until we get user
        return (
            <div>
                <div className='main-content'>
                    This is App page
                    {this.props.children}
                </div>
                <button onClick={this.onClick}> Click here</button>
            </div>
        );
    }
});

const router = (
    <Router history={history}>
        <Route path='/' component={App}>
            <IndexRoute component={Main}/>
            <Route path='/test' data='this data is passed through props' component={Test}/>
        </Route>
    </Router>
);
ReactDOM.render(router, document.getElementById('container'));
