/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    return s.trim().split(' ').filter(char => char !== '').reverse().join(' ')
};

console.log(reverseWords('a good   example'))