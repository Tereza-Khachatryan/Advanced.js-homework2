function getAverage (arr){
    let result = []
    let sum = 0 
    for (let i = 0; i< arr.length ; i++){
       sum += arr[i]
       result = sum / arr.length
    }
    return result
}

console.log(getAverage([100,200,300]))