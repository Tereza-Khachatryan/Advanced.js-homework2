function flattenArr(arr) {
    let result = [];

    
    arr.forEach(item => {
        result.push(item)
    });
    
    return result;
}

const newArr = flattenArr([1, 2, 5,[1,6],[8,9], 3])

console.log(newArr)