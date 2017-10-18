const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

module.exports = createReactClass({
    displayName: 'Main',
    propTypes: {
        history: PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div className="panel panel-default">
                Index page
                <p>Click here to go to other pages</p>
            </div>
        );
    }
});
