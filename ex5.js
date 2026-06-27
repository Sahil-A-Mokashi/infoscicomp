let parse = (i) => {
    let o = parseInt(i);

    if (isNaN(o))
        throw "NaN";

    return o;
};


function ex5(arr) {
    let validNumbers = [];

    for (let item of arr) {
        try {
            validNumbers.push(parse(item));
        } catch (err) {
            // ignore corrupted value
        }
    }

    if (validNumbers.length === 0)
        return "corrupt";

    return validNumbers.reduce((a, b) => a + b, 0);
}

console.log(
    ex5(["3", "5", "hello", "1", "2", "3", "4", "5"])
);
// 23



// console.log(
//     ex5(["2", "3", "5", "67"])
// );
// // 77
