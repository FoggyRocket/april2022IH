

let newArray = [1,2,3]


let otroArray = newArray.forEach((item,index,arrOrgle)=>{
  return item + 1
})

//[2,3,4]
//forEach nunca regresa nada solo sirve para iterar en un arreglo

console.log(" resultado",otroArray)
//let newArray = [1,2,3]
let elBueno = newArray.map((item,index,arrOriginal)=>{
  console.log(item,index,arrOriginal)
  return item + 1
})
//[2,3,4]
console.log("resultado bueno:",elBueno,newArray)

const foods = ['pizza', 'sandwiches', 'ice cream'];

const capFood = foods.map((food)=>{
  return food.toUpperCase()
})


console.log(capFood)

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

// ["m","b","m"]
const firstLetter = cities.map( letter => {
  //0,1,2....n
  //0,1,2,3,4  
  //'miami'
  // letter[0] => m
  // letter[2] => a
  // cities[4] => "berlin"
  // [pos] => array y strings
  
return letter[0] 
})

console.log("FirstLetter",firstLetter)
let otroArregloNuevo = []
for(let item of newArray ){
  otroArregloNuevo.push(item)
}
// reduce
let cart = [
  {
    name:"Kirby",
    price:100
  },
  {
    name:"Gran Malo",
    price:300
  },
]




//1 
let total1=0
cart.forEach(item=>{
  total1 += item.price
})
let total2= 0
let perro = cart.map(item=>{
  total2 += item.price
})
console.log("ForEach",total1)
console.log("map",total2,perro)

//es la herramienta o metodo mas poderoso!!!
//reduce  
     let item = {
  name:"Lord of ring",
  price:1900
}     
//.reduce((valor acumulado,valor acutal)=>{},initValue)
let totalPro = cart.reduce((acc,item)=>{
  return acc += item.price
},0)

//reduce((acc,item)=>{
//  return ...
//},{})

//reduce((acc,item)=>{
//  return ...
//},[{...},{...}])


console.log("Value pro",totalPro)