'use strict';

var epsilon = require('./epsilon');
var factorial = require('./factorial');

// # Binomial Distribution
//
// The [Binomial Distribution](http://en.wikipedia.org/wiki/Binomial_distribution) is the discrete probability
// distribution of the number of successes in a sequence of n independent yes/no experiments, each of which yields
// success with probability `probability`. Such a success/failure experiment is also called a Bernoulli experiment or
// Bernoulli trial; when trials = 1, the Binomial Distribution is a Bernoulli Distribution.
function binomial_distribution(trials, probability) {
    // Check that `p` is a valid probability (0 ≤ p ≤ 1),
    // that `n` is an integer, strictly positive.
    if (probability < 0 || probability > 1 ||
        trials <= 0 || trials % 1 !== 0) {
        return null;
    }

    // a [probability mass function](https://en.wikipedia.org/wiki/Probability_mass_function)
    function probability_mass(x, trials, probability) {
        return factorial(trials) /
            (factorial(x) * factorial(trials - x)) *
            (Math.pow(probability, x) * Math.pow(1 - probability, trials - x));
    }

    // We initialize `x`, the random variable, and `accumulator`, an accumulator
    // for the cumulative distribution function to 0. `distribution_functions`
    // is the object we'll return with the `probability_of_x` and the
    // `cumulative_probability_of_x`, as well as the calculated mean &
    // variance. We iterate until the `cumulative_probability_of_x` is
    // within `epsilon` of 1.0.
    var x = 0,
        cumulative_probability = 0,
        cells = {};

    // This algorithm iterates through each potential outcome,
    // until the `cumulative_probability` is very close to 1, at
    // which point we've defined the vast majority of outcomes
    do {
        cells[x] = probability_mass(x, trials, probability);
        cumulative_probability += cells[x];
        x++;
    // when the cumulative_probability is nearly 1, we've calculated
    // the useful range of this distribution
    } while (cumulative_probability < 1 - epsilon);

    return cells;
}

module.exports = binomial_distribution;