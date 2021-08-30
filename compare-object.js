const one = {
    a: 1
};
const two = {
    a: 1
};

const three = one;

/* if (one == three) {
    console.log('Object are equal');
} else {
    console.log('Object are different');
} */

/* 
console.log(JSON.stringify(one));
console.log(JSON.stringify(two));

if (JSON.stringify(one) === JSON.stringify(two)) {
    console.log('Object are equal');
} */


const one1 = {
    a: 1,
    b: 2
};
const two2 = {
    b: 2,
    1: 1
};
console.log(JSON.stringify(one1));
console.log(JSON.stringify(two2));

if (JSON.stringify(one1) === JSON.stringify(two2)) {
    // console.log('Object are equal');
};

function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObject(one, two);
console.log(isEqual);