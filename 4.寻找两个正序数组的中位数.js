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

// []新拼接数组,找到中间指针
// 判断两个指针所在的子数组
// 比较大小换位
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;
  // const nums = nums1[0] < nums2[0] ? nums1.concat(nums2) : nums2.concat(nums1);
  // let idx1 = len1 % 2 ? (len1 - 1) / 2 : len1 / 2 - 1;
  // let idx2 = (len1 % 2 ? len1 - 1 : len1) + (len2 % 2 ? (len2 - 1) / 2 : len2 / 2);
  if (len % 2) {
    // 奇数
    const idx = (len - 1) / 2;
    if (idx < len1 - 1) {
      // 左边
      //
    } else {
      // 右边
      //
    }
    // while (nums[idx1] !== nums[idx2]) {
    //   if (nums[idx1] < nums[idx2 - 1]) {
    //     idx1 += 1;
    //   } else if (nums[idx1 + 1] < nums[idx2]) {
    //     idx2 -= 1;
    //   } else {
    //   }
    // }
    return nums[idx1];
  } else {
    while (nums[idx1 + 1] !== nums[idx2]) {
      if (nums[idx1] < nums[idx2 - 1]) {
        idx1 += 1;
      } else if (nums[idx1 + 1] < nums[idx2]) {
        idx2 -= 1;
      } else {
      }
    }
    return (nums[idx1] + nums[idx2]) / 2;
  }
};

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

// [1,2,5]\n[3,4]
// [1,2,5,6]\n[3,4]
// [1,3,5,7,9]\n[2,4,6,8]
// @lc code=end
