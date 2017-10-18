var createBrowserHistory = require('history/lib/createBrowserHistory');
var useScroll = require('scroll-behavior/lib/useStandardScroll');
var useBasename = require('history/lib/useBasename');

module.exports = function(basename) {
    var history = useScroll(createBrowserHistory);

    if (basename) {
        history = useBasename(history)({basename: basename});
    } else {
        history = history();
    }

    return history;
};
