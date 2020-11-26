/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
 * design an algorithm to find the maximum profit.
 * Note that you cannot sell a stock before you buy one.
 * @author zheng
 * @date 2020/11/26 14:45:57
 */

/**
 * Time complexity: O(n^2)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let max = 0;
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			let tmp = prices[j] - prices[i];
			max = Math.max(tmp, max);
		}
	}
	return max;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
	if (!prices || !prices.length) return 0;
	let dp = [];
	let minPrice = prices[0];
	for (let i = 0; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		dp.push(prices[i] - minPrice);
	}
	return Math.max(...dp);
};

/**
 * Time complexity: O(n)
 * Time complexity: O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit3 = function (prices) {
	if (!prices || !prices.length) return 0;

	let max = 0;
	let minPrice = prices[0];
	for (let i = 1; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		max = Math.max(max, prices[i] - minPrice);
	}
	return max;
};

console.log(maxProfit3([7, 1, 5, 3, 6, 4]));
console.log(maxProfit3([7, 6, 4, 3, 1]));