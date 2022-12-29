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
var maxArea = function (height) {
  const maxIdx = height.length - 1;

  if (maxIdx === 1) return height[0] * height[1];

  let ret = 0;
  // let x1, x2;
  for (let i = 0; i < maxIdx / 2 - 1; i++) {
    x1 = i;
    x2 = maxIdx - i;
    diffX1 = x2 - x1;
    diffX2 = diffX1 - 1;
    diffX3 = diffX1 - 2;

    const h1 = height[x1] > height[x2] ? height[x1] : height[x2];
    const h2 = height[x1] > height[x2 - 1] ? height[x1] : height[x2 - 1];
    const h3 = height[x1 + 1] > height[x2] ? height[x1 + 1] : height[x2];
    const h4 = height[x1 + 1] > height[x2 - 1] ? height[x1 + 1] : height[x2 - 1];

    const arr = [
      ret,
      diffX1 * h1,
      diffX2 * h2,
      diffX2 * h3,
      diffX3 * h4,
      // height[x1] * height[x2],
      // height[x1] * height[x2 - 1],
      // height[x1 + 1] * height[x2],
      // height[x1 + 1] * height[x2 - 1],
    ];
    console.log(`🚀 ~ maxArea ~ arr`, arr);
    ret = Math.max(...arr);
  }

  return ret;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// @lc code=end
