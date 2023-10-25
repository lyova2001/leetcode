const romanToInt = (s) => {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const sArr = s.split('')
  let acc = 0
  for (let index = 0; index < sArr.length; index++) {
    const currElement = romanToIntMap[sArr[index]]
    const nextElement = romanToIntMap[sArr[index + 1]]
    if (currElement < nextElement) {
      acc += nextElement - currElement
      index++
      continue
    }
    acc += currElement
  }
  return acc
}

console.log(romanToInt('MCMXCIV'))
