/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   // return x === Array.prototype.reverse.apply(null, Array.from(arguments));
//   let ret = true;
//   let len = x.toString().length;
//   console.log(`🚀 ~ isPalindrome ~ len`, len);
//   while (len > 1 && ret) {
//     const front = Math.floor(x / 10 ** (len - 1));
//     const end = x % 10;
//     console.log(`🚀 ~ isPalindrome ~ front`, front);
//     console.log(`🚀 ~ isPalindrome ~ end`, end);
//     if (front === end) {
//       x -= front * 10 ** (len - 1);
//       console.log(`🚀 ~ isPalindrome ~ front * 10 ** len`, front * 10 ** len);
//       console.log(`🚀 ~ isPalindrome ~ x`, x);
//       x = Math.floor(x / 10);
//       console.log(`🚀 ~ isPalindrome ~ x`, x);
//       len -= 2;
//     } else {
//       ret = false;
//     }
//   }

//   return ret;
// };

// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   let ret = true;
//   let len = x.toString().length;
//   while (len > 1 && ret) {
//     const front = Math.floor(x / 10 ** (len - 1));
//     const end = x % 10;
//     if (front === end) {
//       x -= front * 10 ** (len - 1);
//       x = Math.floor(x / 10);
//       len -= 2;
//     } else {
//       ret = false;
//     }
//   }

//   return ret;
// };

var isPalindrome = function (x) {
  if (x < 0) return false;

  const str = x.toString();
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};
// @lc code=end
