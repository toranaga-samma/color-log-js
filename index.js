var log = {};

var methods = {
    none: {importance: 0},
    error: {color: 'red', bgcolor: 'bgRed', importance: 1},
    info: {color: 'cyan', bgcolor: 'bgCyan', importance: 2},
    debug: {color: 'yellow', bgcolor: 'bgYellow', importance: 3}
};
var options = {
    maximumLoggableLevel: 3
};

log.setLogLevel = function (loglevelName) {
    if (methods[loglevelName]) {
        options.maximumLoggableLevel = methods[loglevelName].importance;
    } else {
        options.maximumLoggableLevel = 1; // only show errors
    }
};


for (var method in methods) {
    log[method] = (function(method) {
        return function () {
            var d = new Date();
            if (options.maximumLoggableLevel < methods[method].importance){
                return null;
            }
            var datestring = d.getFullYear() + '/' + 
                            ('0' + (d.getMonth() + 1)).slice(-2) + '/' +
                            ('0' + d.getDate()).slice(-2) + ' ' +
                            ('0' + d.getHours()).slice(-2) + ':' + 
                            ('0' + d.getMinutes()).slice(-2) + ':' + 
                            ('0' + d.getSeconds()).slice(-2) + '.' + 
                            ('00' + d.getMilliseconds()).slice(-3);
            var msg = datestring + '\t' + (' ' + method).slice(-5).toUpperCase().underline;
            msg = msg[methods[method].color];
            for (var i = 0; i < arguments.length; i++) {
                if (typeof (arguments[i]) === 'object') {
                    msg += '\t' + JSON.stringify(arguments[i]);
                } else {
                    msg += '\t' + arguments[i];
                }
            }
            console.log (msg);
            return true;
        };
    })(method);
}
module.exports = log;
