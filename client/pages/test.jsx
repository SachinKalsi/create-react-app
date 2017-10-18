const React = require('react');

module.exports = React.createClass({
    displayName: 'Test',
    propTypes: {
        history: React.PropTypes.object.isRequired,
        data: React.PropTypes.string
    },
    render: function() {
        const data = this.props.data;
        return (
            <div className="panel panel-default">
                React test.jsx DATA.
                <p>{data}</p>
            </div>
        );
    }
});
