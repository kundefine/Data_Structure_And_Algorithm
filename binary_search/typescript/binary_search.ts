function binarySearch(arr : number[], target : number) : number {

    let start : number = 0;
    let end : number = arr.length - 1;

    while (start <= end) {
        let mid : number = Math.floor((start + end) / 2);
        if (target > arr[mid]) {
            start = mid + 1;
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

let arr1 : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target1 : number = 5;
let result1 : number = binarySearch(arr1, target1);

console.log(result1 ); // Output: 4
