/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let nonZeroInd = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroInd] = nums[i]
      nonZeroInd++
    }
  }
  return nums.fill(0, nonZeroInd)
}

console.log(moveZeroes([0, 1, 0, 3, 12])) //[1,3,12,0,0]

