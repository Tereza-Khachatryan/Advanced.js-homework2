let arr = ([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    ],
    "age"
    );

    function sort(arr){
        for(let i = 0; i< arr.length; i++){
            let newArr = []
            newArr.push(arr[i])
        }
        return newArr
    }
    
    alert(sort(arr))