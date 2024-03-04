/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
  const map = {}
  nums.forEach((num) => {
    map[num] = (map[num] || 0) + 1
  });


  return Object.keys(map).reduce((operations, cur) => {
    const keyNumber = +cur
    const currEl = map[cur]
    const currElPair = map[k-keyNumber]
    if (currEl && currElPair) {
      if (keyNumber !== k - cur) {
        operations += Math.min(currEl, currElPair)
        map[cur] = 0
        map[k-keyNumber] = 0
        return operations
      }
      operations += Math.floor(currEl/2)
      map[cur] = 0
      return operations
    }
    return operations
  }, 0)
}

console.log(maxOperations([3,1,3,4,3], 6))

