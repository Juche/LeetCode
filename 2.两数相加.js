/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// console.log(`🚀 ~ addTwoNumbers ~ typeof l1`, l1.next.val);
// console.log(`🚀 ~ addTwoNumbers ~ typeof l2`, l2.val);
// console.log(`🚀 ~ addTwoNumbers ~ typeof l2`, l2);
// console.log(`🚀 ~ addTwoNumbers ~ typeof l2`, JSON.stringify(l2));
// return BigInt(l1.reverse().join('')) + BigInt(l2.reverse().join(''));

// class LinkNode {
//   constructor(val = null) {
//     this.val = val;
//     this.next = null;
//   }
// }
// var addTwoNumbers = function (l1, l2) {
//   class LinkList {
//     constructor(val = null) {
//       this.val = val;
//       this.next = null;
//     }
//     push(val) {
//       if (typeof this.val === 'number') {
//         let cur = this;
//         while (cur.next) {
//           cur = cur.next;
//         }
//         cur.next = { val, next: null };
//       } else {
//         this.val = val;
//       }
//     }
//   }
//   let carry = 0,
//     list = new LinkList();

//   while (l1 || l2) {
//     const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
//     carry = sum > 9 ? 1 : 0;
//     l1 = l1?.next;
//     l2 = l2?.next;

//     list.push(sum % 10);
//   }

//   carry && list.push(1);

//   return list;
// };

// var addTwoNumbers = function (l1, l2) {
//   let carry = 0,
//     list = null,
//     cur = null;

//   while (l1 || l2) {
//     const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
//     carry = sum > 9 ? 1 : 0;

//     l1 = l1?.next;
//     l2 = l2?.next;

//     if (list) {
//       cur.next = new ListNode(sum % 10);
//       cur = cur.next;
//     } else {
//       list = new ListNode(sum % 10);
//       cur = list;
//     }
//   }

//   if (carry) cur.next = new ListNode(1);

//   return list;
// };

var addTwoNumbers = function (l1, l2) {
  let sum = l1.val + l2.val,
    carry = sum > 9 ? 1 : 0,
    list = new ListNode(sum % 10),
    cur = list;

  l1 = l1?.next;
  l2 = l2?.next;

  while (l1 || l2) {
    sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = sum > 9 ? 1 : 0;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (carry) cur.next = new ListNode(1);

  return list;
};

// @lc code=end
