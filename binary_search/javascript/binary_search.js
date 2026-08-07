function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if(target > arr[mid]) {
            start = mid + 1;
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
let result = binarySearch(arr, target);

console.log(result); // Output: 4