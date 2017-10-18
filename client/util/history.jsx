var {createBrowserHistory}  = require('history');
module.exports = function(basename) {
    var history = createBrowserHistory({
        basename: basename
    });
    return history;
};
