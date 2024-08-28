function isPrime(num){
    for (let i  =0 ; i< num -1 ; i++){
        if(num % i === 0){
            return false
        } 
    } return true
}

console.log(isPrime(25))