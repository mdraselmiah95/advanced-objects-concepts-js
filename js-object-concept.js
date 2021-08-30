//using object literal
const student = {
    name: 'Shakib al hasan',
    job: 'cricketer'
};

//constructor

const person = new Object();


//3.

const human = Object.create(student);
// console.log(human.job);

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const peopleTwo = new People('Manus', 12);
// console.log(peopleTwo);


//function

function Manus(name) {
    this.name = name;
}

const man = new Manus('Asif');
console.log(man)