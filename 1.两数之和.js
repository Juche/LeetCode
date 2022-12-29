/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   let items = [];
//   let idex2 = 0;
//   let seek = true;
//   let len = nums.length;
//   let idx = 0;
//   while (seek && idx < len) {
//     // 这里要考虑从当期索引后开始查找
//     idex2 = nums.slice(idx + 1).indexOf(target - nums[idx]);
//     if (idex2 !== -1) {
//       // 第二个元素的索引补回子数组前的元素计数
//       items = [idx, idex2 + idx + 1];
//       seek = false;
//     }
//     idx++;
//   }
//   return items;
// };

// var twoSum = function (nums, target) {
//   const _map = new Map(nums.map((item, idx) => [item, idx]));
//   let len = nums.length;
//   let idx = 0;
//   while (idx < len) {
//     if (_map.has(target - nums[idx]) && _map.get(target - nums[idx]) !== idx) {
//       return [idx, _map.get(target - nums[idx])];
//     }
//     idx++;
//   }
// };

// var twoSum = function (nums, target) {
//   let i = 0,
//     num1 = 0,
//     num2 = -1;
//   while (num2 === -1) {
//     num1 = i;
//     num2 = nums.findIndex((item, index) => item === target - nums[i] && index !== i);
//     i++;
//   }

//   return [num1, num2];
// };

var twoSum = function (nums, target) {
  const _map = new Map(nums.map((item, idx) => [item, idx]));
  let idx1 = -1,
    idx2;
  while (!idx2) {
    idx1++;
    const idx = _map.get(target - nums[idx1]);
    if (idx && idx !== idx1) idx2 = idx;
  }
  return [idx1, idx2];
};

// var nums = [11, 15, 2, 7],
//   target = 9;
// twoSum(nums, target);
// @lc code=end
