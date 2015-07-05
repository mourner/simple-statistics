'use strict';

// # min
//
// This is simply the minimum number in the set.
//
// This runs on `O(n)`, linear time in respect to the array
function min(x) {
    var value;
    for (var i = 0; i < x.length; i++) {
        // On the first iteration of this loop, min is
        // undefined and is thus made the minimum element in the array
        if (x[i] < value || value === undefined) value = x[i];
    }
    return value;
}

module.exports = min;