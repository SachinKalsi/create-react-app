const ROOT_PATH = '/admin';
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var IndexRoute = ReactRouter.IndexRoute;
// const {Router, Route, IndexRoute} = require('react-router');

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
        this.props.history.push('/test');
    },
    render: function() {
        // Don't render children until we get user
        return (
            <div>
                <div>
                    Header
                    {this.props.children}
                    Footer
                </div>
            </div>
        );
    }
});

var Routes = (
<Router history={history}>
    <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='/test'    data='this is test'         components={Test}        />
    </Route>
</Router>);

  ReactDOM.render(Routes, document.querySelector('.container'));
