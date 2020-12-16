/**
 * Design a HashSet without using any built-in hash table libraries.
 * To be specific, your design should include these functions:
 *
 * add(value): Insert a value into the HashSet.
 * contains(value) : Return whether the value exists in the HashSet or not.
 * remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.
 *
 * Note:
 * All values will be in the range of [0, 1000000].
 * The number of operations will be in the range of [1, 10000].
 * Please do not use the built-in HashSet library.
 * @author zheng
 * @date 2020/12/16 23:01:32
 */

/**
 * Runtime: 380 ms, faster than 13.86% of JavaScript online submissions for Design HashSet.
 * Memory Usage: 46.3 MB, less than 91.39% of JavaScript online submissions for Design HashSet.
 * Initialize your data structure here.
 */
var MyHashSet = function () {
	this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
	if (this.contains(key)) return;
	this.set.push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
	for (let i = 0; i < this.set.length; i++) {
		if (this.set[i] == key) {
			this.set.splice(i, 1);
			break;
		}
	}
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
	// for (let item of this.set) {
	// 	if (item === key) {
	// 		return true;
	// 	}
	// }
	// return false;
	return this.set.includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
