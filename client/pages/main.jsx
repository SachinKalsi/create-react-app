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
        console.log(this.context.router.history.location);
        return (
            <div className="panel panel-default">
                Index page
                <button onClick={this.onClick}> Click here to go back to test page</button>
            </div>
        );
    }
});
