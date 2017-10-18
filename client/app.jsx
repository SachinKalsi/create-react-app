const ROOT_PATH = '/admin';
const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter, Route, Switch, Link } = require('react-router-dom');
const createClass = require('create-react-class');
const PropTypes = require('prop-types');
const Test = require('./pages/test.jsx');
const Main = require('./pages/main.jsx');

var history = require('./util/history')(ROOT_PATH);
const App = createClass({
    displayName: 'App',
    propTypes: {
        children: PropTypes.node,
        history: PropTypes.object.isRequired
    },
    onClick: function() {
        this.props.history.push('/main');
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
                <Link to='/test'>Bro</Link>
            </div>
        );
    }
});

  const Routes = (
      <BrowserRouter>
          <div>
              <Route exact path='/admin' component={App}/>
              <Switch>
                  <Route exact path='/test' data='test from new routers' history={history} component={Test}/>
                  <Route exact path='/main' component={Main}/>
             </Switch>
          </div>
      </BrowserRouter>
  );


ReactDOM.render(Routes, document.getElementById('container'));
