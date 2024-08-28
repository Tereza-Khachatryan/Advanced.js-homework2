function generateFibonacci(num) {
    let num1 = 0
    let num2 = 1
    let arr = []
    let nexNum = 0
    for (let i = 0; nexNum < num; i++) {
      arr.push(num1)
      nexNum = num1 + num2
      num1 = num2
      num2 = nexNum
    }
    arr.push(num1)
    return arr
  }
  
  console.log(generateFibonacci(15))