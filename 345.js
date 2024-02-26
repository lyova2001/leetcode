/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    const chars = s.split('')
    const reversedVowelChars = chars.filter(char => vowels.includes(char)).reverse()
    const resultChars = []

    for (let index = 0, vowelIndex = 0; index < chars.length; index++) {
        const char = chars[index];
        if (vowels.includes(char)) {
            resultChars.push(reversedVowelChars[vowelIndex])
            vowelIndex++
        }
        else {
            resultChars.push(char) 
        }
    }
    return resultChars.join('')
};

console.log(reverseVowels('hello')) // holle