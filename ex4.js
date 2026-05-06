// Function to process input string
// Input format:
// "3 5 : 1 2 3 4 5 6 7 8 9"

let factorMultiples = (input) => {

    // Split factors and multiples parts
    let parts = input.split(":");

    // Convert factors into array of integers
    let factors = parts[0]
        .trim()
        .split(" ")
        .map(x => parseInt(x));

    // Convert multiples list into array of integers
    let multiples = parts[1]
        .trim()
        .split(" ")
        .map(x => parseInt(x));

    let sum = 0;

    // Check each number in multiples list
    for (let i = 0; i < multiples.length; i++) {

        let num = multiples[i];

        // Check divisibility by any factor
        for (let j = 0; j < factors.length; j++) {

            if (num % factors[j] === 0) {
                sum += num;
                break; // avoid duplicate addition
            }
        }
    }

    // Return required output format
    return `${sum} : ${parts[0].trim()} : ${parts[1].trim()}`;
};


// Example
let input = "3 5 : 1 2 3 4 5 6 7 8 9";

alert(factorMultiples(input));

/*
Output:
23 : 3 5 : 1 2 3 4 5 6 7 8 9
*/

//keep code DRY (Don't repeat yourself)

//if you're finished, code it into a page