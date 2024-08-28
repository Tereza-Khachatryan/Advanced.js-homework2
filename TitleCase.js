function titleCase(str){
    let words = str.split(" ")
    let res = words.map((word) => {
        if(word.length > 0){
            return word[0].toUpperCase()+word.slice(1).toLowerCase()
        }
        return word
    })
    return res.join(' ')
}

console.log(titleCase("hi there"))
