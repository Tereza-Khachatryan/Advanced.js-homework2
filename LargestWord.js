function getLargestWord (str){
    let result = ""
    let words = str.split(' ')
    for (word of words){
        if (result < word.length ){
            result += word
        }
    }
    return result
}

alert(getLargestWord("JavaScript is awesome"))