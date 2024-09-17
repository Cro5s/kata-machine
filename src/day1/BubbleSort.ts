// export default function bubble_sort(arr: number[]): void {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const tempNum = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tempNum;
//             }
//         }
//     }
// }

// Recursive Solution
export default function bubble_sort(
    arr: number[],
    n: number = arr.length,
): void {
    if (n === 1) {
        return;
    }

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            swapPositions(arr, i);
        }
    }

    bubble_sort(arr, n - 1);
}

function swapPositions(arr: number[], index: number): void {
    const tempNum = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = tempNum;
}
