/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    let charIndex = 0
    for (let index = 0; index < t.length; index++) {
        if (t[index] === s[charIndex]) {
            charIndex++
        }
    }
    return s.length === charIndex
};
