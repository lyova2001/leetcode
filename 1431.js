/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const currentMax = Math.max(...candies)
    return candies.map((val) => val + extraCandies >= currentMax)
};

console.log(kidsWithCandies([2,3,5,1,3], 3))

// [2,3,5,1,3]
// 3
// [4,2,1,1,2]
// 1
// [12,1,12]
// 10