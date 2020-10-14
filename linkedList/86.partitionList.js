/**
 * Given a linked list and a value x, partition it such that
 * all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * @author zheng
 * @date 2020/10/14 10:37:38
 */
const { ListNode, createList } = require('./ListNode');

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
	if (!head || !head.next) return head;
	let dummy = new ListNode(0);
	dummy.next = head;
	let slow = dummy;
	let fast = dummy;
	let arr = []; // 保存大于等于 x 的结点，最后重新加入链表尾

	while (fast && fast.next) {
		if (fast.next.val < x) {
			slow.next = fast.next;
			slow = slow.next;
		} else {
			arr.push(fast.next);
		}
		fast = fast.next;
	}

	for (let item of arr) {
		item.next = null;
		slow.next = item;
		slow = slow.next;
	}
	return dummy.next;
};

let arr = [1, 4, 3, 2, 5, 2];
let node = createList(arr);

let res = partition(node.next, 3);
while (res) {
	console.log(res.val);
	res = res.next;
}
