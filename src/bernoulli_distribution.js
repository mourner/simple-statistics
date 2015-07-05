'use strict';

var binomial_distribution = require('./binomial_distribution');

// # Bernoulli Distribution
//
// The [Bernoulli distribution](http://en.wikipedia.org/wiki/Bernoulli_distribution)
// is the probability discrete
// distribution of a random variable which takes value 1 with success
// probability `p` and value 0 with failure
// probability `q` = 1 - `p`. It can be used, for example, to represent the
// toss of a coin, where "1" is defined to mean "heads" and "0" is defined
// to mean "tails" (or vice versa). It is
// a special case of a Binomial Distribution
// where `n` = 1.
function bernoulli_distribution(p) {
    // Check that `p` is a valid probability (0 ≤ p ≤ 1)
    if (p < 0 || p > 1 ) { return null; }

    return binomial_distribution(1, p);
}

module.exports = bernoulli_distribution;