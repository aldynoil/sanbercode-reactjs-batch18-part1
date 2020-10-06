//--Soal 1
class Animal {
    constructor(name) {
    this._animalis = name;
    this.legs = 4;
    this.cold_blooded = false;      
    }
get animalis() {
    return this._animalis;
    }
set animalis(name){
    this._animalis = name;
    }
}
var sheep = new Animal("shaun");
console.log(sheep._animalis)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

// Inheritance
class Ape extends Animal {
    constructor(name){
    super(name);  
    this.legs = 2;
        }
        yell(){
            return "Auooo";
    }
}
var sungokong = new Ape("kera sakti");
sungokong.yell()
console.log(sungokong)

class Frog extends Animal {
    constructor(name){
    super(name);
    this.legs = 2;  
        }
        jump(){
            return "hop hop";
    }
}
var kodok = new Frog("buduk");
kodok.jump()
console.log(kodok)


//--Soal 2
class Clock{
    constructor({template}){
        this._template = template;
        this.timer;
}
render(){
    var date = new Date();

    var hours = date.getHours();
    if(hours < 10)hours = '0' + hours;

    var mins = date.getMinutes();
    if(mins < 10)mins = '0' + mins;

    var scnd = date.getSeconds();
    if(scnd < 10)scnd = '0' + scnd;

    var output = this._template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', scnd)
    console.log(output)
}
stop(){
    clearInterval(this.timer)
}
start(){
    this.render();
    this.timer= setInterval(()=>this.render(),1000);
};
}
let clock = new Clock({template: `h:m:s`});
clock.start();  
