const fibonacci = function(input) {
    const arr = [0, 1];

    const int = parseInt(input);
    if (int < 0 || !Number.isInteger(int)) return "OOPS";

    arr[input] = input;
    [...arr].map((currentValue, index) => {
        if (index >= 2) {
            currentValue = arr[index - 1] + arr[index - 2];
            arr[index] = currentValue;
        }
    });

    return arr.slice(0, input);
};


console.log(fibonacci(8));


const fibsRec = function(n, i=2, array=[0,1]) {
    switch(n) {
        case 0:
            return [];
        case 1:
            return array.slice(0,1);
        case i:
            return array;
        default:
            array.push((array[i - 1] + array[i - 2]));
            return fibsRec(n, i + 1, array);
    }
}


console.log(fibsRec(15));


const mergeSort = function(array) {

    const splitIndex = Math.floor(array.length / 2)
    let leftHalf = array.slice(0, splitIndex);
    let rightHalf = array.slice(splitIndex);
    const newArray = [];

    if (leftHalf.length > 1) leftHalf = mergeSort(leftHalf);
    if (rightHalf.length > 1) rightHalf = mergeSort(rightHalf);

    const copyLeft = leftHalf.slice();
    const copyRight = rightHalf.slice();
    let i = 0;
    let j = 0;

    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j]) {
            newArray.push(leftHalf[i]);
            copyLeft.shift();
            i++
        } else {
            newArray.push(rightHalf[j]);
            copyRight.shift();
            j++
        }
    }

    if (copyLeft.length === 0) {
        for (const item of copyRight) newArray.push(item);
    }
    else if (copyRight.length === 0) {
        for (const item of copyLeft) newArray.push(item);
    }

    return newArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([1, 2, 3, 4, 5]));
