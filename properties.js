const bottle = {
    color: 'Pink',
    hold: 'water',
    price: 55,
    isClean: true
};

//getting all properties names
const keys = Object.keys(bottle);
// console.log(keys)


//getting all values names
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle);


bottle.price = 100;
bottle.hight = 16;
delete bottle.isClean;
console.log(bottle);