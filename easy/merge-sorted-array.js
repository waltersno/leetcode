/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let firstArrayStartIndex = m - 1;
  let secondArrayStartIndex = n - 1;
  let finalArrayStartIndex = m + n - 1;
  const iterationCount = Math.max(nums1.length, nums2.length);

  for (let i = 0; i < iterationCount; i++) {
    if (nums2.length === 0) {
      break;
    }

    if (nums1[firstArrayStartIndex] > nums2[secondArrayStartIndex]) {
      nums1[finalArrayStartIndex] = nums1[firstArrayStartIndex];
      firstArrayStartIndex--;
      finalArrayStartIndex--;
    } else if (nums1[firstArrayStartIndex] === nums2[secondArrayStartIndex]) {
      nums1[finalArrayStartIndex] = nums1[firstArrayStartIndex];
      finalArrayStartIndex--;
      firstArrayStartIndex--;
    } else if (
      nums1[firstArrayStartIndex] < nums2[secondArrayStartIndex] ||
      !nums1[firstArrayStartIndex]
    ) {
      nums1[finalArrayStartIndex] = nums2.pop();
      finalArrayStartIndex--;
      secondArrayStartIndex--;
    }
  }
};
