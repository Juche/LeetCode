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

// [通过]先合并排序,然后计算中间索引
// var findMedianSortedArrays = function (nums1, nums2) {
//   // [1, 3],[2]
//   // nums1 = [5, 1, 2];
//   // nums2 = [3, 4];
//   // nums1 = [3];
//   // nums2 = [-2, -1];
//   const arr = [...nums1, ...nums2].sort((pre, next) => pre - next);
//   const len = arr.length;
//   // console.log(`🚀 ~ findMedianSortedArrays ~ arr`, arr);
//   // console.log(`🚀 ~ findMedianSortedArrays ~ len`, len);
//   return len % 2 ? arr[(len - 1) / 2] : (arr[len / 2 - 1] + arr[len / 2]) / 2;
// };

// [未通过]对两数组起始数据比大小决定两数组指针调整方向
// 两数据调整指针位置 & 交叉比较大小
// var findMedianSortedArrays = function (nums1, nums2) {
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   const len = len1 + len2;
//   const nums = nums1[0] < nums2[0] ? nums1.concat(nums2) : nums2.concat(nums1);
//   let idx1 = len1 % 2 ? (len1 - 1) / 2 : len1 / 2 - 1;
//   let idx2 = (len1 % 2 ? len1 - 1 : len1) + (len2 % 2 ? (len2 - 1) / 2 : len2 / 2);
//   if (len % 2) {
//     let idx = idx1;
//     let idxCopy;
//     while (idx !== idxCopy) {
//       idxCopy = idx;
//       if (nums[idx1 + 1] < nums[idx2 - 1] || nums[idx1 + 1] > nums[idx2]) {
//         idx1 += 1;
//         idx = idx1;
//       }
//       if (nums[idx2 - 1] > nums[idx1 + 1] || nums[idx2 - 1] < nums[idx1]) {
//         idx2 -= 1;
//         idx = idx2;
//       }
//     }
//     return nums[idx];
//   } else {
//     let idxs = [idx1, idx2];
//     let idxsCopy;
//     while (idxs[0] !== idxsCopy[0] || idxs[1] !== idxsCopy[1]) {
//       idxsCopy = [...idxs];
//       if (nums[idx1 + 1] < nums[idx2 - 1] || nums[idx1 + 1] > nums[idx2]) {
//         idx1 += 1;
//         idxs[1] = idx1;
//       }
//       if (nums[idx2 - 1] > nums[idx1 + 1] || nums[idx2 - 1] < nums[idx1]) {
//         idx2 -= 1;
//         idxs[2] = idx2;
//       }
//     }
//     return (nums[idx1] + nums[idx2]) / 2;
//   }
// }

// [未通过]对两数组起始数据比大小决定两数组指针调整方向
// 两数据调整指针位置 & 交叉比较大小
// var findMedianSortedArrays = function (nums1, nums2) {
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   const len = len1 + len2;
//   const nums = nums1[0] < nums2[0] ? nums1.concat(nums2) : nums2.concat(nums1);
//   let idx1 = len1 % 2 ? (len1 - 1) / 2 : len1 / 2 - 1;
//   let idx2 = (len1 % 2 ? len1 - 1 : len1) + (len2 % 2 ? (len2 - 1) / 2 : len2 / 2);
//   if (len % 2) {
//     while (nums[idx1] !== nums[idx2]) {
//       if (nums[idx1] < nums[idx2 - 1]) {
//         idx1 += 1;
//       } else if (nums[idx1 + 1] < nums[idx2]) {
//         idx2 -= 1;
//       }else {}
//     }
//     return nums[idx1];
//   } else {
//     while (nums[idx1 + 1] !== nums[idx2]) {
//       if (nums[idx1] < nums[idx2 - 1]) {
//         idx1 += 1;
//       } else if (nums[idx1 + 1] < nums[idx2]) {
//         idx2 -= 1;
//       }else{}
//     }
//     return (nums[idx1] + nums[idx2]) / 2;
//   }
// };

// [未通过]先笼统找出两个数组的保底项(偶数中间两项/奇数中间三项)
// [1, 2]\n[3, 4, 5, 6, 7, 8, 9];
// var findMedianItems = function (arr) {
//   const len = arr.length;
//   if (len < 4) return arr;
//   return len % 2
//     ? [arr[(len - 1) / 2 - 1], arr[(len - 1) / 2], arr[(len - 1) / 2 + 1]]
//     : [arr[len / 2 - 1], arr[len / 2]];
// };
// var findMedianSortedArrays = function (nums1, nums2) {
//   const arr = [...findMedianItems(nums1), ...findMedianItems(nums2)].sort(
//     (pre, next) => pre - next
//   );

//   switch (arr.length) {
//     case 1:
//       return arr[0];
//     case 2:
//       return (arr[0] + arr[1]) / 2;
//     case 3:
//       return arr[1];
//     case 4:
//       return (arr[1] + arr[2]) / 2;
//     case 5:
//       return arr[2];
//     case 6:
//       return (arr[2] + arr[3]) / 2;
//   }
// };

// [通过]找到中间指针索引
// 从小到大去除素组元素,直到找到中间索引大小对应值
// var findMedianSortedArrays = function (nums1, nums2) {
//   const len = nums1.length + nums2.length;

//   if (len % 2) {
//     const pos = (len + 1) / 2;
//     let n = 0,
//       num;
//     while (n < pos) {
//       if (nums1[0] < nums2[0]) {
//         num = nums1.shift();
//       } else if (nums1[0] > nums2[0]) {
//         num = nums2.shift();
//       } else {
//         num = nums1.length > nums2.length ? nums1.shift() : nums2.shift();
//       }
//       n++;
//     }

//     return num;
//   } else {
//     const pos1 = len / 2;
//     const pos2 = len / 2 + 1;
//     let n = 0,
//       num,
//       num1,
//       num2;
//     while (n < pos2) {
//       if (nums1[0] < nums2[0]) {
//         num = nums1.shift();
//       } else if (nums1[0] > nums2[0]) {
//         num = nums2.shift();
//       } else {
//         num = nums1.length > nums2.length ? nums1.shift() : nums2.shift();
//       }
//       n++;
//       if (n === pos1) num1 = num;
//       if (n === pos2) num2 = num;
//     }

//     return (num1 + num2) / 2;
//   }
// };

// [有点问题]找到中间指针索引
// 通过递增对应索引直到找到中间索引大小对应值
// let i = len1 % 2 ? (len1 - 1) / 2 : len1 / 2 - 1,
//   j = len2 % 2 ? (len2 - 1) / 2 : len2 / 2 - 1,
//   k = len % 2 ? (len + 1) / 2 : len / 2;
// var findMedianSortedArrays = function (nums1, nums2) {
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   if (!len1) return len2 % 2 ? nums2[(len2 - 1) / 2] : (nums2[len2 / 2 - 1] + nums2[len2 / 2]) / 2;

//   if (!len2) return len1 % 2 ? nums1[(len1 - 1) / 2] : (nums1[len1 / 2 - 1] + nums1[len1 / 2]) / 2;

//   const len = len1 + len2;

//   if (len === 2) return (nums1[0] + nums2[0]) / 2;

//   if (len === 3) return [...nums1, ...nums2].sort((pre, next) => pre - next)[1];

//   let i = 0,
//     j = 0,
//     cur;
//   if (len % 2) {
//     while (i + j < (len + 1) / 2) {
//       cur =
//         nums1[i] === nums2[j]
//           ? nums1[i + 1]
//             ? nums1[i++]
//             : nums2[j++]
//           : nums1[i] > nums2[j]
//           ? nums2[j++]
//           : nums1[i++];
//     }

//     return cur;
//   } else {
//     let pre;
//     while (i + j < len / 2 + 1) {
//       pre = cur;

//       cur =
//         nums1[i] === nums2[j]
//           ? nums1[i + 1]
//             ? nums1[i++]
//             : nums2[j++]
//           : nums1[i] > nums2[j]
//           ? nums2[j++]
//           : nums1[i++];
//       // if(nums1[i] > nums2[j]) j++
//       // if(nums1[i] < nums2[j]) i++
//       // if(nums1[i+1]) i++
//       // if(nums1[j+1]) j++
//     }

//     console.log(`🚀 ~ findMedianSortedArrays ~ i`, i);
//     console.log(`🚀 ~ findMedianSortedArrays ~ j`, j);
//     console.log(`🚀 ~ findMedianSortedArrays ~ cur`, cur);
//     console.log(`🚀 ~ findMedianSortedArrays ~ pre`, pre);
//     cur = cur === 0 ? cur : cur || nums1[i] || nums2[j];
//     return (pre + cur) / 2;
//   }
// };

// []找到中间指针索引
// 通过递增对应索引直到找到中间索引大小对应值
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  if (!len1) return len2 % 2 ? nums2[(len2 - 1) / 2] : (nums2[len2 / 2 - 1] + nums2[len2 / 2]) / 2;

  if (!len2) return len1 % 2 ? nums1[(len1 - 1) / 2] : (nums1[len1 / 2 - 1] + nums1[len1 / 2]) / 2;

  const len = len1 + len2;

  if (len === 2) return (nums1[0] + nums2[0]) / 2;

  // if (len === 3) return [...nums1, ...nums2].sort((pre, next) => pre - next)[1];

  let i = 0,
    j = 0,
    k = len % 2 ? (len - 1) / 2 : len1 > len2 ? len / 2 + 1 : len / 2;
  let pre,
    cur = nums1[0] > nums2[0] ? nums2[0] : nums1[0];
  while (i + j < k) {
    if (len1 > i + 1 && len2 > j + 1) {
      pre = cur;
      cur =
        nums1[i] >= nums2[j + 1] ? nums2[j++] : nums1[i + 1] <= nums2[j] ? nums1[i++] : nums2[j++];
      console.log(`🚀 ~ findMedianSortedArrays ~ cur`, cur);
    } else {
      pre = nums1[i] < nums2[j] ? nums1[i] : nums2[j];
      cur = len1 > i + 1 ? nums1[i++] : nums2[j++];
    }
    // else if (len1 > i + 1) {
    //   pre = nums1[i] < nums2[j] ? nums1[i] : nums2[j];
    //   cur = nums1[i++];
    // } else if (len2 > j + 1) {
    //   pre = nums1[i] < nums2[j] ? nums1[i] : nums2[j];
    //   cur = nums2[j++];
    // }
  }

  console.log(`🚀 ~ findMedianSortedArrays ~ cur`, cur);
  console.log(`🚀 ~ findMedianSortedArrays ~ pre`, pre);
  console.log(`🚀 ~ findMedianSortedArrays ~ i`, i);
  console.log(`🚀 ~ findMedianSortedArrays ~ j`, j);
  console.log(`----------`);

  return len % 2 ? cur : (pre + cur) / 2;
};

// TODO: 最小和最大值进行包夹

// @lc code=end
