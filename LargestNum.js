function getLargestAge (arr){
    let result = -Infinity
    for (let i = 0; i < arr.length ; i++){
        if(arr[i]> result){
           result = arr[i]
        }
    }
       return result
}

let res  = getLargestAge([1,3,5,7,9])
console.log(res)