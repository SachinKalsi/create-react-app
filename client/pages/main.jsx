const React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    displayName: 'Main',
    propTypes: {
        history: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div className="panel panel-default">
                content page <Link to='test'> click here</Link>
            </div>
        );
    }
});
