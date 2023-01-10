/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// for (let i = 0; i < s.length; i++) {
//   const nextI = s.substr(i + 1).indexOf(s[i]);
//   if (nextI > gap) {
//     const str = s.substr(i, nextI);
//     new Set(str).size === str.length;
//     gap = nextI;
//   }
//   console.log(`🚀 ~ lengthOfLongestSubstring ~ i`, i);
//   if (s.length - i - 2 < gap) return gap + 1;
// }

// var lengthOfLongestSubstring = function (s) {
//   // if (s.length < 2) return s.length;
//   if (new Set(s).size === s.length) return s.length;

//   let gap = 1,
//     i = 0;

//   while (gap < s.length - i - 1) {
//     let subLen = s.substr(i + 1).indexOf(s[i]) + 1;
//     // if (subLen === -1) subLen = s.substr(i + 1).length;
//     if (subLen === 0) subLen = s.length - 1 - i;

//     let subLen2 = s.substring(0, s.length - 1 - i).lastIndexOf(s[s.length - 1 - i]) + 1;
//     if (subLen2 === 0) subLen2 = s.length - 1 - i;

//     console.log(`🚀 ~ lengthOfLongestSubstring ~ i`, i);
//     console.log(`🚀 ~ lengthOfLongestSubstring ~ subLen`, subLen);
//     console.log(`🚀 ~ lengthOfLongestSubstring ~ subLen2`, subLen2);

//     if (subLen > gap) {
//       const str = s.substr(i, subLen);
//       console.log(`🚀 ~ lengthOfLongestSubstring ~ str 1`, str);
//       if (new Set(str).size === str.length) gap = subLen;
//     }

//     if (subLen2 > gap) {
//       const str = s.substr(0, subLen2);
//       console.log(`🚀 ~ lengthOfLongestSubstring ~ str 2`, str);
//       if (new Set(str).size === str.length) gap = subLen2;
//     }

//     i++;
//   }
//   return gap;
// };

// var lengthOfLongestSubstring = function (s) {
//   if (new Set(s).size === s.length) return s.length;

//   let gap = 1,
//     i = 0,
//     maxIdx = s.length - 1;

//   while (gap <= maxIdx - i) {
//     let subLen = s.substr(i + 1).indexOf(s[i]) + 1;
//     if (subLen === 0) subLen = maxIdx - i + 1;

//     if (subLen > gap) {
//       const str = s.substr(i, subLen);
//       if (new Set(str).size === str.length) gap = subLen;
//     }

//     subLen = s.substring(0, maxIdx - i).lastIndexOf(s[maxIdx - i]) + 1;
//     if (subLen === 0) subLen = maxIdx - i + 1;
//     if (subLen > gap) {
//       const str = s.substr(0, subLen);
//       if (new Set(str).size === str.length) gap = subLen;
//     }

//     i++;
//   }
//   return gap;
// };

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let gap = 0,
    i = 0,
    len = s.length,
    charMap = new Map(),
    idxs = [];

  while (len > i) {
    if (charMap.has(s[i])) {
      idxs.push(charMap.get(s[i]));
      idxs.push(i);
    }
    charMap.set(s[i], i);
    console.log(`🚀 ~ lengthOfLongestSubstring ~ idxs`, idxs);
    console.log(`🚀 ~ lengthOfLongestSubstring ~ charMap`, charMap);
    i++;
  }
  // gap =
  // idxs [ 0, 3, 1, 4, 2, 5, 6, 7 ]
  console.log(`🚀 ~ lengthOfLongestSubstring ~ idxs`, idxs);
  for (let i = 0; i < array.length / 2; i++) {
    // arr[i+1] - arr[i]
    // arr[i+2] - arr[i]
  }
  return gap;
};
// @lc code=end
