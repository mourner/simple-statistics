'use strict';

var mean = require('./mean');
var sample_variance = require('./sample_variance');

// # [2-sample t-test](http://en.wikipedia.org/wiki/Student's_t-test)
//
// This is to compute two sample t-test.
// Tests whether "mean(X)-mean(Y) = difference", (
// in the most common case, we often have `difference == 0` to test if two samples
// are likely to be taken from populations with the same mean value) with
// no prior knowledge on standard deviations of both samples
// other than the fact that they have the same standard deviation.
//
// Usually the results here are used to look up a
// [p-value](http://en.wikipedia.org/wiki/P-value), which, for
// a certain level of significance, will let you determine that the
// null hypothesis can or cannot be rejected.
//
// `diff` can be omitted if it equals 0.
//
// [This is used to confirm or deny](http://www.monarchlab.org/Lab/Research/Stats/2SampleT.aspx)
// a null hypothesis that the two populations that have been sampled into
// `sample_x` and `sample_y` are equal to each other.
//
// Depends on `sample_variance()` and `mean()`
function t_test_two_sample(sample_x, sample_y, difference) {
    var n = sample_x.length,
        m = sample_y.length;

    // If either sample doesn't actually have any values, we can't
    // compute this at all, so we return `null`.
    if (!n || !m) return null;

    // default difference (mu) is zero
    if (!difference) difference = 0;

    var meanX = mean(sample_x),
        meanY = mean(sample_y);

    var weightedVariance = ((n - 1) * sample_variance(sample_x) +
        (m - 1) * sample_variance(sample_y)) / (n + m - 2);

    return (meanX - meanY - difference) /
        Math.sqrt(weightedVariance * (1 / n + 1 / m));
}

module.exports = t_test_two_sample;