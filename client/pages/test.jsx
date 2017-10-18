const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

module.exports = createReactClass({
    displayName: 'Test',
    propTypes: {
        history: PropTypes.object.isRequired,
        data: PropTypes.string
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
