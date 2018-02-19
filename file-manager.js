var fs = require('fs');
var Q = require('q');
var _ = require('underscore');

module.exports = {

//==================================================================
// LOGS ORDERS
//==================================================================
    logOrder: function (order) {
        var deferred = Q.defer();
        fs.readFile('./log.json', function (err, data) {
            if (err) deferred.reject({ status: 'error', message: "error opening log" });
            else {
                var logs = JSON.parse(data);
                //assigns projectId and sets order placed flag
                order["orderPlaced"] = true;
                order["projectId"] = order["package"] + "-" + order["roomCount"] + "-" + new Date().getTime();
                order["timestamp"] = new Date();
                logs.orders.push(order);
                fs.writeFile('./log.json', JSON.stringify(logs), function (err, data) {
                    if (err) deferred.reject({ status: 'error', message: "error writing to log" });
                    else {
                        deferred.resolve({ status: 'success', data: order });
                    }
                });
            }
        });
        return deferred.promise;
    },

//==================================================================
// GETS PROJECTS
//==================================================================
    getProject: function (id) {
        var deferred = Q.defer();
        if (fs.existsSync('./projects/' + id + '.json')) {
            fs.readFile('./projects/' + id + '.json', 'utf8', function (err, data) {
                if (err) deferred.reject({ status: 'error', message: err });
                else deferred.resolve({ status: 'success', project: JSON.parse(data) });
            });
        } else {
            deferred.resolve({ status: '!exists', project: {} });
        }
        return deferred.promise;
    },
};