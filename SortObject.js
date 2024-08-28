let arr = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];

function sort(arr, i, ascending ) {
    arr.sort((a, b) => {
        if (a[i] > b[i]) {
            return ascending ? 1 : -1;
        }
        if (a[i] < b[i]) {
            return ascending ? -1 : 1;
        }
        return 0;
    });
    return arr;
}

alert(JSON.stringify(sort(arr, "age")))