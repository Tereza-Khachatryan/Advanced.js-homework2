function findIntersection(arr1, arr2) {
    let result = [];
    
    const setArr2 = new Set(arr2);
    
    arr1.forEach(item => {
        if (setArr2.has(item)) {
            result.push(item);
        }
    });
    
    return result;
}

const intersection = findIntersection([1, 2], [2, 3])

console.log(intersection)