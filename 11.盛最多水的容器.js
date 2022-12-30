/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   const maxIdx = height.length - 1;

//   if (maxIdx === 1) return height[0] * height[1];
//   if (maxIdx === 2)
//     return Math.max(height[0] * height[1], height[0] * height[2], height[1] * height[2]);

//   let ret = 0;
//   for (let i = 0; i < maxIdx / 2 - 1; i++) {
//     const i2 = maxIdx - i;
//     const diffX1 = i2 - i;
//     const diffX2 = diffX1 - 1;
//     const diffX3 = diffX1 - 2;

//     const h1 = height[i] < height[i2] ? height[i] : height[i2];
//     const h2 = height[i] < height[i2 - 1] ? height[i] : height[i2 - 1];
//     const h3 = height[i + 1] < height[i2] ? height[i + 1] : height[i2];
//     const h4 = height[i + 1] < height[i2 - 1] ? height[i + 1] : height[i2 - 1];

//     ret = Math.max(ret, diffX1 * h1, diffX2 * h2, diffX2 * h3, diffX3 * h4);
//   }

//   return ret;
// };

// var maxArea = function (height) {
//   const maxIdx = height.length - 1;

//   if (maxIdx === 1) {
//     return height[0] < height[1] ? height[0] : height[1];
//   }
//   if (maxIdx === 2) {
//     const h1 = height[0] < height[1] ? height[0] : height[1];
//     const h2 = height[0] < height[2] ? height[0] : height[2];
//     const h3 = height[1] < height[2] ? height[1] : height[2];
//     return Math.max(h1, h2 * 2, h3);
//   }

//   let ret = 0;
//   for (let i = 0; i < maxIdx / 2 - 1; i++) {
//     const i2 = maxIdx - i;
//     const diffX1 = i2 - i;
//     const diffX2 = diffX1 - 1;
//     const diffX3 = diffX1 - 2;

//     const h1 = height[i] < height[i2] ? height[i] : height[i2];
//     const h2 = height[i] < height[i2 - 1] ? height[i] : height[i2 - 1];
//     const h3 = height[i + 1] < height[i2] ? height[i + 1] : height[i2];
//     const h4 = height[i + 1] < height[i2 - 1] ? height[i + 1] : height[i2 - 1];

//     ret = Math.max(ret, diffX1 * h1, diffX2 * h2, diffX2 * h3, diffX3 * h4);
//   }

//   return ret;
// };

// var maxArea = function (height) {
//   const maxIdx = height.length - 1;
//   let ret = 0;
//   for (let i = 0; i < maxIdx; i++) {
//     const x = height.shift();
//     const arr = height.map((item, idx) => (x < item ? x : item) * (idx + 1));
//     ret = Math.max(ret, ...arr);
//   }

//   return ret;
// };

// var maxArea = function (height) {
//   const len = height.length;
//   let ret = 0;
//   for (let w = 1; w < len; w++) {
//     const hs = [];
//     for (let j = 0; j < len - w; j++) {
//       hs.push(Math.min(height[j], height[j + w]));
//     }
//     // console.log(`🚀 ~ maxArea ~ hs`, hs);
//     const h = Math.max(...hs);

//     ret = Math.max(ret, w * h);

//     // height = height.map((item, idx) => {
//     //   return Math.min(item, height[idx + 1]);
//     // });
//     // height.pop();
//     // console.log(`🚀 ~ maxArea ~ height`, height);
//     // const h = Math.max(...height);
//     // ret = Math.max(ret, w * h);
//   }

//   return ret;
// };

// var maxArea = function (height) {
//   const len = height.length;
//   let ret = 0;
//   for (let w = 1; w < len; w++) {
//     let h = 0;
//     for (let j = 0; j < len - w; j++) {
//       h = Math.max(Math.min(height[j], height[j + w]), h);
//     }
//     ret = Math.max(ret, w * h);
//   }

//   return ret;
// };

var maxArea = function (height) {
  let ret = 0;
  const len = height.length;
  let w = len - 1;
  let x1 = 0;
  let x2 = len - 1;

  while (w > 0) {
    // const area = w * Math.min(height[x1], height[x2]);
    // ret = Math.max(area, ret);
    // h1 > h2 ? x2-- : x1++;
    // w--;

    ret =
      height[x1] < height[x2]
        ? Math.max(ret, height[x1++] * w--)
        : Math.max(ret, height[x2--] * w--);
  }

  return ret;
};

// [2, 3, 10, 5, 7, 8, 9]
// [1,2,1]
// [1,2]
// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// @lc code=end
