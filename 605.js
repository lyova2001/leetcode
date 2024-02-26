/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    let count = 0
    for (let index = 0; index < flowerbed.length; index++) {
        if (!flowerbed[index - 1] && !flowerbed[index] && !flowerbed[index + 1]) {
            flowerbed[index] = 1
            count++
        }
    }
    return count >= n
};

console.log(canPlaceFlowers([1,0,0,0,1], 1))