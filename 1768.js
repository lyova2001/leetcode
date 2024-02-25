/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    const result = []
    for (let index = 0; index <= Math.max(word1.length, word2.length); index++) {
        const word1Char = word1[index]
        const word2Char = word2[index]
        if (word1Char) {
            result.push(word1Char)
        }
        if (word2Char) {
            result.push(word2Char)
        }
    }
    return result.join('')
};

console.log(mergeAlternately('abc', 'test')) // atbecst