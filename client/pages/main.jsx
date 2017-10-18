const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

module.exports = createReactClass({
    displayName: 'Main',
    propTypes: {
        history: PropTypes.object.isRequired
    },
    contextTypes: {
        router: PropTypes.object
    },
    onClick: function() {
        this.context.router.history.push('test');
    },
    render: function() {
        return (
            <div className="panel panel-default">
                <h1>This is main page</h1>
                <button onClick={this.onClick}> Click here to go to test page</button>
            </div>
        );
    }
});
