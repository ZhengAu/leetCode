/**
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 * An integer n is a power of four, if there exists an integer x such that n == 4^x.
 *
 * Constraints: -2^31 <= n <= 2^31 - 1
 *
 * Follow up: Could you solve it without loops/recursion?
 * @author zheng
 * @date 2020/12/30 22:02:51
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
	let num = 1;
	while (num < n) {
		num = num * 4;
	}
	return n == num;
};
