/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var isPalindrome = function (str) {
  for (let i = 1; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};

// var longestPalindrome = function (s) {
//   let i = 0,
//     charMap = new Map(),
//     subStr = s[0];
//   while (i < s.length) {
//     // s.substring(i, s.length - 1 - i);
//     // s.indexOf(s[i]);
//     const chars = charMap.get(s[i]);
//     if (chars) {
//       charMap.set(s[i], [...chars, i]);
//     } else {
//       charMap.set(s[i], [i]);
//     }

//     i++;
//   }

//   console.log(`🚀 ~ longestPalindrome ~ charMap`, charMap);

//   for (const [key, val] of charMap) {
//     if (val.length > 1) {
//       console.log(`🚀 ~ longestPalindrome ~ val`, val);
//       for (let i = 0; i < val.length - 1; i++) {
//         const str = s.substring(val[i], val[val.length - 1] + 1);
//         console.log(`🚀 ~ longestPalindrome ~ str`, str);

//         if (isPalindrome(str) && val[val.length - 1] + 1 - val[i] > subStr.length) subStr = str;
//       }
//     }
//   }

//   console.log(`🚀 ~ longestPalindrome ~ subStr`, subStr);
//   return subStr;
// };

// var longestPalindrome = function (s) {
//   let i = 0,
//     charMap = new Map(),
//     subStr = s[0];
//   while (i < s.length) {
//     const chars = charMap.get(s[i]);
//     if (chars) {
//       charMap.set(s[i], [...chars, i]);
//     } else {
//       charMap.set(s[i], [i]);
//     }
//     i++;
//   }

//   console.log(`🚀 ~ longestPalindrome ~ charMap`, charMap);
//   for (const [key, val] of charMap) {
//     const lastIdx = val.length - 1;
//     if (lastIdx > 0) {
//       for (let i = 0; i < lastIdx; i++) {
//         console.log(`🚀 ~ longestPalindrome ~ i`, i);
//         for (let j = i + 1; j <= lastIdx; j++) {
//           console.log(`🚀 ~ longestPalindrome ~ j`, j);
//           // if (
//           //   val[lastIdx] + 1 - val[i] > subStr.length &&
//           //   isPalindrome(s.substring(val[i], val[lastIdx] + 1))
//           // )
//           //   subStr = s.substring(val[i], val[lastIdx] + 1);
//           if (val[j] + 1 - val[i] > subStr.length && isPalindrome(s.substring(val[i], val[j] + 1)))
//             subStr = s.substring(val[i], val[j] + 1);
//         }
//       }
//     }
//   }

//   return subStr;
// };

// var longestPalindrome = function (s) {
//   let i = 0,
//     charMap = new Map(),
//     subStr = s[0];
//   while (i < s.length) {
//     const chars = charMap.get(s[i]);
//     if (chars) {
//       charMap.set(s[i], [...chars, i]);
//     } else {
//       charMap.set(s[i], [i]);
//     }
//     i++;
//   }

//   for (const [key, val] of charMap) {
//     if (val.length > 1) {
//       for (let i = 0; i < val.length - 1; i++) {
//         for (let j = i + 1; j < val.length; j++) {
//           if (val[j] + 1 - val[i] > subStr.length) {
//             const str = s.substring(val[i], val[j] + 1);
//             if (isPalindrome(str)) subStr = str;
//           }
//         }
//       }
//     }
//   }

//   return subStr;
// };

var longestPalindrome = function (s) {
  let i = 0,
    charMap = new Map(),
    subStr = s[0];
  while (i < s.length) {
    const chars = charMap.get(s[i]);
    if (chars) {
      charMap.set(s[i], [...chars, i]);
    } else {
      charMap.set(s[i], [i]);
    }
    i++;
  }

  for (const [key, val] of charMap) {
    let i = 0;
    while (val[val.length - 1] + 1 - val[0] > subStr.length && i < val.length - 1) {
      console.log(`🚀 ~ longestPalindrome ~ i`, i);
      for (let j = val.length - 1; j > i; j--) {
        console.log(`🚀 ~ longestPalindrome ~ j`, j);
        if (val[j] + 1 - val[i] > subStr.length) {
          const str = s.substring(val[i], val[j] + 1);
          if (isPalindrome(str)) {
            subStr = str;
            j = 0; // 跳出循环
          }
        }
      }
      i++;
    }
    // if (val[val.length - 1] + 1 - val[0] > subStr.length) {
    //   for (let i = 0; i < val.length - 1; i++) {
    //     for (let j = i + 1; j < val.length; j++) {
    //       if (val[j] + 1 - val[i] > subStr.length) {
    //         const str = s.substring(val[i], val[j] + 1);
    //         if (isPalindrome(str)) subStr = str;
    //       }
    //     }
    //   }
    // }
  }

  return subStr;
};

// 'aacabdkacaa';
// @lc code=end
