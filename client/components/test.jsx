const React = require('react');
const createReactClass = require('create-react-class');
const { PropTypes } = require('prop-types');

module.exports = createReactClass({
    propTypes: {
        data: PropTypes.string
    },
    render: function() {
        const data = this.props.data;
        return (
            <div className="panel panel-default">
                React js DATA.
                <p>{data}</p>
            </div>
        );
    }
});
