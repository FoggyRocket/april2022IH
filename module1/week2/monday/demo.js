//objects

const xchell = {
    name: "Xchell",
    lasName: "Cruz",
    "age": 29,
    "friends lsit" : ["Aldo","David","Ricardo"],
    eat: function () {
        return "a Xchell le gustan las alitas"
    },
    pet : {
        name: "Nena",
        age:11,
        breed: "street"
    },
    single: false,
    moto: undefined,
    car: null    
    
}
const azdhy={
  name:"azdhy",
  edad:26,
  comida_Favorita: ["quesadillas,tacos"],
  'vehicule':true,
  deportes: function (){
    return "texto"
  },
  car: undefined
}

const carlos = {
  name: 'Carlos',
  age: 25,
  comidaFavorita: [ 'Cortes de Carne','Chilakillers','Pizza', 'Hamburguesa'],
	deportesFavoritos: ['Futbol','Americano','Formula1','Squash'],
  single : true,
  ciudad : 'EDOMEX',
  status : function ironHack(){ 
    return "Necesito Ayuda"
  }    
}

const emmanuel = {
  name:'emmanuel',
  age:39,
  comidaFavorita:['falafel', 'pakoras', 'momos'],
  city: 'Aguascalientes',
  deportes: ['Muay Thai', 'Yoga', 'Correr', 'Crossfit'],
  single: true  
}


let anaLuz = {
  name: 'Ana Luz',
  lastname: 'Martinez',
  age: 27,
  city: 'Navojoa',
  hobbies:['Leer', 'Videojuegos', 'Crossfit', 'Futbol'],
  soltero: false,
  pet: {specie: 'dog',
        petName: 'Rufo',
        age: 5},
  casaPropia: null,
  raza: undefined
}


let objeto1 = {
  name: "Anuar",
  lastName: "Chapur",
  city: "Merida",
  pet: {
    kind: "dog",
    age: .5
  },
  hobbies: ["tennis", "golf", "pesca"],
}


let kain = {
  name:"Emmanuel",
  city:"distrito funeral",
  games: true,
  skate: true,
  food:"pizza",
  drunking: ["beer","ron","vodka"],
  married:true,
  music:["folk","metal","grindcore"],
  nightcrawler: ()=> console.log("hell yeah"),
  pet:[{species:"dog",name:"thor"},{species:"cat",name:"tyr"}]
}



const yafte = {
  name:'yafte',
  age:27,
  name_animals:['piny','blue','margarito'],
	team: 'Godzilla',
  videogame: 'Age of empire II',
  game_console:['playStation','xbox','gameBoy'],
  type_console:{playStation:'play_1',
               xbox:'xbox360',
               gameBoy:'color'}
}







let arturo = {
  
  name:"Arturo Barrantes",
  books:"Stay Hard", 
  age:30,
  toRead:()=>"100M offer, Think Fast, Think Slow",
  single:true,
  Countries:{
    Europe:['Poland','Georgia'],
    America:['Colombia','Mexico']},
  car: null,
  favoriteMetalBand:undefined
}

let vale = {
  name: 'Valentin',
  lastName: 'Quiroga',
  age: 33,
  likeHorrorMovies: false,
  cats:{
    names: ['zelda','elvira'],
    outDoors: false
  },
  favoriteColors: ['blue','green','black'],
  fraseFavorita: function(){
  return `Ya me volvio a dar hambre`}
}

let alejandro = {
  name: "Alejandro",
  lastName: "Morante",
  age: 32,
  hobbies: ["Climb", "Music"],
  pets:function (){
    return "Teo" && "Coco"
  },
  playSports: false 
}  
  
let Mapy = {
  name: 'Mapy',
  lastName: 'Villalobos',
  age: 32,
  City: 'CDMX',
  petName: 'Niuton',
  petBreed: 'pug',
  favFood: ['chilaquiles', 'hot dogs', 'Thai Food'],
  practiceBox: true,
}


let Dylan = {
    name: "Dylan",
    lastName: "Torres",
    "age": 29,
    "friend list": ["Yafte", "Anuar","Xchell", "Valentin"],
    comer:  function () {
        return "Dylan come Lechuga"
    }, // tiene un return implicito
    pet: {
        name: "Nova",
        age: 2,
        breed: "Beagle"
    },
    single: false,
    moto: undefined,
    car: null
}
console.log(Dylan)






const classes = [
  [
   xchell,azdhy,carlos,kain,yafte,anaLuz,arturo,vale,alejandro,Mapy,Dylan
    
  ],
  [
    { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
    { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
    { firstName: 'Emie', lastName: 'Franecki', age: 29 },
    { firstName: 'Okey', lastName: 'Runte', age: 18 },
    { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
  ],
  [
    { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
    { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
    { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
    { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
    { firstName: 'Stanley', lastName: 'Hand', age: 22 }
  ],
  [
    { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
    { firstName: 'Mervin', lastName: 'Blick', age: 28 },
    { firstName: 'Damien', lastName: 'Rohan', age: 28 },
    { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
    { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
  ],
  [
    { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
    { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
    { firstName: 'Braeden', lastName: 'Walker', age: 26 },
    { firstName: 'Derick', lastName: 'Weber', age: 22 },
    { firstName: 'Robert', lastName: 'Beatty', age: 30 }
  ]
];


console.log("classes",classes)

//dylan
//1.-dylan traer el nombre del perro
//Dylan.pet.name => "nova"
//anuar.favoriteFood[0] => "tacos"
classes[20][1].name
//Dylan
classes[4][4].firstName
//




//
// Anuar -------

console.log(Dylan.pet.name)
console.log(Mapy.favFood[1])
console.log(vale.cats.names[0])

Dylan.pet="kibi"
console.log(Dylan.pet)

//Mapy
console.log(classes [0][7].favoriteColors[2])
console.log([0][6].Countries.America[0])
console.log([0][8].pets())

//ana luz
console.log(classes[0][1].edad) //1.-edad de azdhy
console.log(classes[0][2].single = false) // es carlos soltero? cambiarlo a falso
console.log(classes[4][3].lastName)// lastName de Derick

//Ale
console.log([0][10].age) //Edad de xchell
console.log(azdhy.comida_Favorita[0]) //Comida favorita de azdhy
console.log(Mapy.practiceBox) // Confirmacion que mapy practica boxeo


//Yafte
console.log(classes[0][10].pet.name) //Nova
console.log(classes[0][0].eat()) // Xchell le gustan las alitas
console.log(classes[3][0].age) //20
console.log(classes[2][1].lastName) //Nienow
classes[0][10].pet = 'chanchito' // Cambio valor
console.log(classes[0][10].pet) // chanchito




//azdhy 
console.log(classes[7]["age"]) // edad valentin









//Valenitn
//el primer hoobie de Ana
console.log(classes[0][5].hobbies[0])
//la ultima comida favorita de mapy
console.log(classes[0][9].favFood[2])
//funtion de xchell
console.log(classes[0][0].eat())
//cambiando el nombre del libro de Arturo a can't hurt me
console.log(classes[0][6].books = `can't hurt me`)


// Anuar ---
// el nombre de Dylan
console.log(classes[0][10].name)

//la segunda comida favorita de Mapy
console.log(classes[0][9].favFood[1])

classes[0][9].favFood[1]="kibi" // cambio a kibi
console.log(classes[0][9].favFood[1])

// primer color de vale
console.log(classes[0][7].favoriteColors[1])


//Arturo

//musica de emmanuel
console.log(classes[0][3].music = ["Salsa"]);
//cambio de ciudad de carlos
console.log(classes[0][2].ciudad = "Peru");

//Ahora Azdhy no tiene auto:

console.log(classes[0][1].vehicule = false)





