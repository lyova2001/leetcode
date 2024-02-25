/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
  let max = -Number.MAX_VALUE, mx2 = -Number.MAX_VALUE
  for (let i = nums.length - 1; i >= 0; i--) {
      max = Math.max(max, nums[i])
      mx2 = max > nums[i] ? Math.max(nums[i], mx2) : mx2
      if (max > nums[i] && mx2 > nums[i]) {
        return true
      }
  }
  return false
};

console.log(increasingTriplet([20, 100, 10, 12, 5, 13])) // true
