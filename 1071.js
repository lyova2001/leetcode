/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {

    const gcd = (a, b) => {
        if (!b) {
          return a;
        }
      
        return gcd(b, a % b);
      }

    if (str1 + str2 !== str2 + str1) {
        return ''
    } 

    const max = gcd(str1.length, str2.length)
    return str1.substring(0, max)
}
console.log(gcdOfStrings('ABCABC', 'ABC'))

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""