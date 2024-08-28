function reverse(str){
    let arr = str.split('')
    let newArr = arr.reverse()
    let result = newArr.join('')
    return result
}

console.log(reverse("JavaScript"))