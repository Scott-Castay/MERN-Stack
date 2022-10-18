class Ninja {
    constructor (name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("Name:" + this.name);
    }

    showStats() {
        console.log("Name:" + this.name," ", "Stength:" +this.strength, " ","Speed:" + this.speed, " ", "Health:" + this.health);
    }

    drinkSake(){
        this.health += 10;

    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10){
        super (name);
        this.wisdom = wisdom;
    }

    speakWisdom (){
        super.drinkSake();
        console.log("Hagia Sophia");
    }
}

const sensei = new Sensei("Holy Monk");
sensei.speakWisdom();