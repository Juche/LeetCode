/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   const hash = {
//     I: 1,
//     V: 5,
//     X: 10,
//     IV: 4,
//     IX: 9,
//     L: 50,
//     C: 100,
//     XL: 40,
//     XC: 90,
//     D: 500,
//     M: 1000,
//     CD: 400,
//     CM: 900,
//   };

//   const ids = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV'];
//   let ret = 0;

//   for (let i = 0; i < 6; i++) {
//     const id = ids[i];

//     if (s.includes(id)) {
//       const [p1, p2] = s.split(id);
//       ret += hash[id];
//       p1.split('').forEach((char) => (ret += hash[char]));
//       if (!p2) return ret;
//       s = p2;
//     } else if (i === 5) {
//       s.split('').forEach((char) => (ret += hash[char]));
//       return ret;
//     }
//   }

//   return ret;
// };

// var romanToInt = function (s) {
//   const hash = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let maxIdx = s.length - 1;
//   let ret = hash[s[maxIdx]];

//   for (let i = 0; i < maxIdx; i++) {
//     const pre = hash[s[i]];
//     const next = hash[s[i + 1]];
//     ret = pre >= next ? ret + pre : ret - pre;
//   }

//   return ret;
// };

var romanToInt = function (s) {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let maxIdx = s.length - 1;
  let ret = hash[s[maxIdx]];
  let pre = hash[s[0]];

  for (let i = 0; i < maxIdx; i++) {
    const next = hash[s[i + 1]];
    ret = pre >= next ? ret + pre : ret - pre;
    pre = next;
  }

  return ret;
};

// 'III';
// 'LVIII';
// 'MCMXCIV';
// romanToInt('III');
// @lc code=end
