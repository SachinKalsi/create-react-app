const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

module.exports = createReactClass({
    displayName: 'Test',
    propTypes: {
        data: PropTypes.string
    },
    contextTypes: {
        router: PropTypes.object
    },
    onClick: function() {
        this.context.router.history.push('main');
    },
    render: function() {
        const data = this.props.data;
        return (
            <div className="panel panel-default">
                <h1>{data}</h1>
                <button onClick={this.onClick}> Click here to go to main page</button>
            </div>
        );
    }
});
