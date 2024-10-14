const fibonacci = function(input) {
    const arr = [0, 1];

    input = parseInt(input);
    if (input < 0 || !Number.isInteger(input)) return "OOPS";

    arr[input] = input;
    [...arr].map((currentValue, index) => {
        if (index >= 2) {
            currentValue = arr[index - 1] + arr[index - 2];
            arr[index] = currentValue;
        }
    });

    return arr.slice(0, input);
};


// console.log(fibonacci(8));


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


// console.log(fibsRec(15));


