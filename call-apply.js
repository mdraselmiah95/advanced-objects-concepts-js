const Shakib = {
    id: 103,
    money: 5500,
    name: 'Al amin',
    major: 'Math',
    treatDey: function (expense, tips, tex) {
        this.money = this.money - expense - tips - tex;
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

// call
// Shakib.treatDey.call(heroAmin, 500, 30, 50);
// Shakib.treatDey.call(heroAmin, 300, 50, 100);

//apply

Shakib.treatDey.apply(heroAmin, [500, 50, 100]);
Shakib.treatDey.apply(normalGolam, [600, 100, 110])