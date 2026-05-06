// compute the sum of multiples of a or b in list l
let listEuler1 = (a, b, l) => {

    let sum = 0;

    for (let i = 0; i < l.length; i++) {

        if (l[i] % a === 0 || l[i] % b === 0) {
            sum += l[i];
        }
    }

    return sum;
};


// compute the sum of multiples in list a found in list l
// example: a=[2,3]
let listEuler2 = (a, l) => {

    let sum = 0;

    for (let i = 0; i < l.length; i++) {

        for (let j = 0; j < a.length; j++) {

            if (l[i] % a[j] === 0) {
                sum += l[i];
                break; // avoid adding same number multiple times
            }
        }
    }

    return sum;
};


// same as above but works for any size list a
// example: a=[2,3,5]
let listEuler3 = (a, l) => {

    let sum = 0;

    for (let i = 0; i < l.length; i++) {

        let isMultiple = false;

        for (let j = 0; j < a.length; j++) {

            if (l[i] % a[j] === 0) {
                isMultiple = true;
                break;
            }
        }

        if (isMultiple) {
            sum += l[i];
        }
    }

    return sum;
};


let eulerlist = () =>
{
    let a = 2;
    let b = 3;

    let l = [1,2,3,4,5,6,7,9,10,10,10];

    let result = listEuler1(a, b, l);

    alert(result);
}


let euler2Lists = () =>
{
    let a = [2,3];

    let l = [1,2,3,4,5,6,7,9,10,10,10];

    let result = listEuler2(a, l);

    alert(result);
}


let euler2Lists1 = () =>
{
    let a = [2,3,5];

    let l = [1,2,3,4,5,6,7,9,10,10,10];

    let result = listEuler3(a, l);

    alert(result);
}