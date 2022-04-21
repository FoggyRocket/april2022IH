
//Para crear una claseJS

/*class nameClase{
    constructor(){
        //las propiedades!!! o atributos
    }
    //methods
    nameMethod(){
        //nuestro codigo
    }

}

extends (herencia propiedades y metodos)
*/

//nombre.key = valor
class Hero{
    //propiedades!!!!
    constructor(name,fuerza){
        this.name = name;
        this.strength = fuerza;
        this.life = 3;
        this.lifePoints= 100;
    }
    //Metodos
    punch(enemy){
        enemy.lifePoints -= this.strength
        console.log("te di un golpe!")
    }
    kick(enemy){
        enemy.lifePoints -= this.strength
        console.log("te di una patada!")
    }
}

//nombre.key = valor
class Perro{
    //propiedades!!!!
    constructor(){
        this.name = "Nova";
        this.strength = 400;
        this.life = 3;
        this.lifePoints= 100;
    }
    //Metodos
    punch(enemy){
        enemy.lifePoints -= this.strength
        console.log("te di un golpe!")
    }
    kick(enemy){
        enemy.lifePoints -= this.strength
        console.log("te di una patada!")
    }
}


class Enemy extends Perro{
    constructor(name,poder){
            //nombrePersonaje, numeroFuerza
        super()
         //nuevos valores
         this.knife = true;
         this.car = true
    }

    //
    warCry(){
        this.strength += 500;
        console.log("Listo para morir",this)
    }
    punch(hero){
        if(this.knife){
            hero.lifePoints -= (this.strength + 50)
        }else{
            console.log("paso el turno")
        }
    }
}

//var perrito = new Hero()


const batman = new Hero("Batman",300)
const aquaman = new Hero("Arthur", 500)
const chava = new Enemy("Salvador",400)
const dylan = new Enemy("FoggyRocket",300)

let newArray = [0,2,4]
console.log("El nombre de mi heroe es:", batman)
console.log("el Enemigo", chava)
console.log("el segundo hero es:",aquaman)


chava.warCry()