class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}


// herois do jogo

class bigMage extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.maxLife = 100;
        this.attack = 25;
        this.defense = 20;
    }
}

class littleMage extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.maxLife = 100;
        this.attack = 20;
        this.defense = 10;
    }
}

class bigWarriors extends Character {
    constructor(name){
        super(name);
        this.life = 100;
        this.maxLife = 100;
        this.attack = 35;
        this.defense = 20;
    }
}

// monstros do jogo

class bigMonster extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.maxLife = 100;
        this.attack = 25;
        this.defense = 20;
    }
}


class littleMonster extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.maxLife = 100;
        this.attack = 25;
        this.defense = 10;
    }
}

class boss extends Character {
    constructor(name){
        super(name);
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 40;
        this.defense = 50;
    }
}

class Cenario{
    constructor(lutador1, lutador2, lutador1El, lutador2El, logObject){
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.lutador1El = lutador1El;
        this.lutador2El = lutador2El;
        this.log = logObject;
    }

    start(){
        this.update();
       this.lutador1El.querySelector('.attackbutton').addEventListener('click', ()=> this.doAttack(this.lutador1, this.lutador2))
       this.lutador2El.querySelector('.attackbutton').addEventListener('click', ()=> this.doAttack(this.lutador2, this.lutador1))
    }

    update(){
        //lutador1

        this.lutador1El.querySelector('.name').innerHTML = `${this.lutador1.name} - ${this.lutador1.life.toFixed(1)} HP`;
        let l1Pct = (this.lutador1.life / this.lutador1.maxLife)*100;
        this.lutador1El.querySelector('.bar').style.width =`${l1Pct}%`

        //lutador2
        
        this.lutador2El.querySelector('.name').innerHTML = `${this.lutador2.name} - ${this.lutador2.life.toFixed(1)} HP`;
        let l2Pct = (this.lutador2.life / this.lutador2.maxLife)*100;
        this.lutador2El.querySelector('.bar').style.width =`${l2Pct}%`
    }

    doAttack(attacking, attacked){
        if(attacked.life <=0 || attacking.life <=0){
            this.log.addMenssage('ESSE CARA JA ESTA MORTO BURRO');
            return;
        }

        let attackFactor = (Math.random() *2).toFixed(2);
        let defenseFactor = (Math.random()*2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualdefense = attacked.defense * defenseFactor;


        if(actualAttack > actualdefense){
            attacked.life -= actualAttack;
            this.log.addMenssage(`${attacking.name } causou ${actualAttack.toFixed(2)} de dano em  ${attacked.name}`)
        }else{
            this.log.addMenssage(`${attacked.name} conseguiu defender....`)
        }

        this.update();
    }
}

class Log{
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addMenssage(msg){
        this.list.push(msg);
        this.render();
        
    }
    render(){
        this.listEl.innerHTML = '';

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}