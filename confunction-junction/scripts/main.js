// Write a function that returns two numbers added together that are sent in as arguments

const addNumbers = (num1, num2, num3, num4) => {
  const sum = num1 + num2 + num3 + num4         // everything inside the function is "internal code"
  if (sum > 1000) {
    return 0
  }
  return sum
}

const sum1 = addNumbers(1, 11, 111, 3)        // external caller
const sum2 = addNumbers(56, 27, 812, 284935)

console.log(sum1)
console.log(sum2)

// refactor so that the external code specifies what the max number should be

const addMoreNumbers = (num1, num2, num3, num4, maxNum) => {
  const sum = num1 + num2 + num3 + num4
  if (sum > maxNum) {
    return 0
  }
  return sum
}

const sum3 = addMoreNumbers(35,26,47,16,50)
const sum4 = addMoreNumbers(15,26,17,45,10000)

console.log(sum3)
console.log(sum4)

// refactor to take any number of numbers and add them together with a max number
const addAnyNumbers = (maxNum,...numbers) => {     // can use rest parameters feature
  let sum = 0
  for ( let i=0; i<numbers.length; i++) {
    sum += numbers[i]
  }
  if (sum > maxNum) {
    return 0
  }
  return sum
}

const sum5 = addAnyNumbers(50,1,4,2,7,42,71)
console.log(sum5) 

const sum6 = addAnyNumbers(10000, 2, 3,4,61,6,7)
console.log(sum6)