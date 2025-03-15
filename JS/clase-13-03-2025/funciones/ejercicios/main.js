/**
 * Function to calculate the sum of two logarithms with a given base.
 * @param {number} base - The base of the logarithm.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The sum of the logarithms or an error message if the parameters are invalid.
 */
function logs(base, a, b) {
    if (a <= 0 || b <= 0 || base <= 0) {
        return console.error("Parameters must be greater than zero");
    }

    let logA = Math.log(a) / Math.log(base);
    let logB = Math.log(b) / Math.log(base);

    return logA + logB;
}