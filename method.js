const student = {
    id: 103,
    money: 4500,
    name: 'Al amin',
    major: 'Math',
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'Rohim',
        major: 'Math'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, tips = 0) {
        this.money = this.money - expense - tips;
        return this.money;
    }
}

student.takeExam();

const remaining1 = student.treatDey(500);
const remaining2 = student.treatDey(400, 50);
// console.log(remaining1);
console.log(remaining2);