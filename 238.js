/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const productOfAll = (numArray) => {
        return numArray.reduce((acc, curr) => {
            return acc * curr
        }, 1)
    }

    const productOfNums = productOfAll(nums)

    return nums.map((el, index) => {
        if (el) {
            return productOfNums/el
        }
        return productOfAll(nums.filter((_, numIndex) => index !== numIndex))
    })
};

console.log(productExceptSelf([-1,1,0,-3,3]))