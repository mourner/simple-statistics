'use strict';

// # Inverse [Gaussian error function](http://en.wikipedia.org/wiki/Error_function)
//
// Returns a numerical approximation to the value that would have caused
// error_function() to return x.
function inverse_error_function(x) {
    var a = (8 * (Math.PI - 3)) / (3 * Math.PI * (4 - Math.PI));

    var inv = Math.sqrt(Math.sqrt(
            Math.pow(2 / (Math.PI * a) + Math.log(1 - x * x) / 2, 2) -
            Math.log(1 - x * x) / a) -
            (2 / (Math.PI * a) + Math.log(1 - x * x) / 2));

    if (x >= 0) {
        return inv;
    } else {
        return -inv;
    }
}

module.exports = inverse_error_function;