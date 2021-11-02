'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clear = exports.stop = exports.start = exports.get = undefined;

var _workerTimers = require('worker-timers');

var workerTimers = _interopRequireWildcard(_workerTimers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var origin = window.location.origin;
var key = origin + '_duration';

var get = exports.get = function get() {
    return Number(localStorage.getItem(key));
};

var start = exports.start = function start() {
    return workerTimers.setInterval(function () {
        if (!get()) {
            localStorage.setItem(key, 0);
        }
        localStorage.setItem(key, get() + 1);
    }, 1000);
};

var stop = exports.stop = function stop(id) {
    workerTimers.clearInterval(id);
};

var clear = exports.clear = function clear() {
    localStorage.removeItem(key);
};