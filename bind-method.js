const Shakib = {
    id: 103,
    money: 5500,
    name: 'Al amin',
    major: 'Math',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('Here is happen', this);
        return this.money;
    }
}

const heroAmin = {
    id: 105,
    money: 6000,
    name: ' Hero Amin'
}

const normalGolam = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
}

Shakib.treatDey(100);

const heroTreatDay = Shakib.treatDey.bind(heroAmin);
heroTreatDay(500);
heroTreatDay(200);


const normalTreatDey = Shakib.treatDey.bind(normalGolam);
normalTreatDey(100)