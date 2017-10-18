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
        history: PropTypes.object.isRequired
    },
    contextTypes: {
        router: PropTypes.object
    },
    onClick: function() {
        this.props.history.push('test');
    },
    render: function() {
        // Don't render children until we get user
        return (
            <div>
                <div className='main-content'>
                    <p>Header</p>
                    <button onClick={this.onClick}> Click here to go to test page</button>
                    <p>Footer</p>
                </div>

            </div>
        );
    }});

    const TestComponent = function(props) {
        return (
            <Test
                data = 'This data has been passed from props'
                />
        );

    };

  const Routes = (
      <BrowserRouter>
          <div>
              <Route exact path={ROOT_PATH} component={App}/>
                  <Route exact path={ROOT_PATH + '/test'} component={TestComponent}/>
                  <Route exact path={ROOT_PATH + '/main'} component={Main}/>
          </div>
      </BrowserRouter>
  );


ReactDOM.render(Routes, document.getElementById('container'));
