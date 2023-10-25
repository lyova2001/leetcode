const twoSum = (nums, target) => {
    const hashMap = new Map()

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (index === 0) {
            hashMap.set(element, index)
            continue
        }
        const secondElement = target - element
        if (hashMap.has(secondElement)) {
            return [hashMap.get(secondElement), index]
        }
        hashMap.set(element, index)
    }
  }
  
  const nums = [3, 2, 4]
  const target = 6
  
  console.log(twoSum(nums, target))
  