function mergeSort(array) {
    if (array.length < 2) return array;
    let middle = Math.floor(array.length / 2);
    let leftSide = array.slice(0, middle);
    let rightSide = array.slice(middle, array.length);
    //recursive until each arr len 1
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {
    let res = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            // add left value
            res.push(left.shift());
        } else {
            // add right value
            res.push(right.shift());
        }
    }

    // merge left and right values
    while (left.length) res.push(left.shift());
    while (right.length) res.push(right.shift());
    return res;
}

let res = mergeSort([1, 2, 5, 3, 6, 0, 2])
res
//sorted array