/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // [1, 3],[2]
  // nums1 = [5, 1, 2];
  // nums2 = [3, 4];
  // nums1 = [3];
  // nums2 = [-2, -1];
  const arr = [...nums1, ...nums2].sort((pre, next) => pre - next);
  const len = arr.length;
  // console.log(`🚀 ~ findMedianSortedArrays ~ arr`, arr);
  // console.log(`🚀 ~ findMedianSortedArrays ~ len`, len);
  return len % 2 ? arr[(len - 1) / 2] : (arr[len / 2 - 1] + arr[len / 2]) / 2;
};
// @lc code=end
