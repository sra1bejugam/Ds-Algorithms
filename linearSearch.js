function linearSearch(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i;
        }
    }
    return -1;
}
let res = linearSearch([1, 2, 3, 4, 5], 4)
res
//3