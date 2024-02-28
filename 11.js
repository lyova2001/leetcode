/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {

    let acc = 0, leftIndex = 0, rightIndex = height.length - 1;

    while(leftIndex < rightIndex) {
        const leftEl = height[leftIndex]
        const rightEl = height[rightIndex]
        const min =  Math.min(leftEl, rightEl)

        acc = Math.max(acc, [rightIndex - leftIndex] * min)
        if (leftEl > rightEl) {
            rightIndex -= 1
        } else {
            leftIndex += 1
        }
    }

    return acc
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))