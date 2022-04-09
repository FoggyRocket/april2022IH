
 //Array

 //new Array()

 const newArray = []
 //diccionarios 
 /*
 string
 boolean
 number
 function
 null
 undefined
 array
 object
 NaN
 */
 
 const perro = [
   29,"dylan", //0,1
   true,null,//2,3
   ["Tacos","Lechuga"], {key:"value",pet:"gatito"}, //4,5
   function nova (){return"Nova"},undefined //6,7
 ]
 
 //.length. ==> str 
 //"dylan".lenght =>  5
 //length para saber si Arreglo o texto tiene elementos
 console.log("elementos?:",newArray.length)
 console.log("elementos?2:",perro.length)
 // newArray.length === 0 
 if(newArray.length){
   console.log("estoy lleno")
 }else{
   console.log("estoy vacio")
 }
 
 //como accedemos a elementos dentro de un array
 //por su index array[2]
 console.log(perro[3])
 console.log(perro[6])
 //ejecutar
 console.log( perro[6]() )
 // [nameKey] || .nameKey
 console.log(perro[5].key)
 console.log(perro[5]["key"])
 console.log(perro[5].pet,perro[6],perro[3] )
 console.log(perro[4][1])
 
 
 // llenamos al array
 //push unshit || ...array (spread operator)
 
 newArray.push("Xchell")
 
 console.log("Tortillas,",newArray)
 
 newArray.push("Mapy")
 console.log("Tortillas2,",newArray)
 //array.push(item)
 //unshift insertar al inicio de la fila
 //push al final 
 newArray.unshift("Kain")
 console.log("Tortillas3,",newArray)
 
 //shift elemina al primer elemento
 newArray.shift()
 console.log("salida,",newArray)
 //pop()
 newArray.pop()
 console.log("salida2,",newArray)
 
 newArray.push("Azdhy","Carlos")
 
 newArray.push("Arturo")
 
 console.log("Tortillas3,",newArray);
 //splice(index_Que_queremosBorrar, cantidad_elementos)
 newArray.splice(1,1)
 console.log("nueva Salida,",newArray);
 
 newArray.splice(0,2)
 
 console.log("nueva Salida2,",);
 
 const names = [
   "Dylan",
   "Azdhy",
   'Carlos',
   "Yafte",
   "Emmanuel",
   "Mapy",
   "Ana Luz",
   'Valentin',
   "Xchell",
     "Arturo",
   "Kain"
 
 ]
 
 //for
 for(let i= 0; i<names.length ; i++){
 
 console.log("elemento:",names[i])
  
 }
 //array.forEach
 
 
 //plural.forEach((singular,)=>{})
               //item, index,arrayOrignal
 names.forEach( (name,index,arrayOriginal)=>{
     console.log("forEach:",name, index)
     if(name[0] === "X" ||name[0] === "x") {
                   //pos para eliminar cantidad 
       names.splice(index,1)
       console.log("Se fue a beber")
     }
 })
 
 function printStars(howMany) {
   console.log('*'.repeat(howMany));
 }
  
 [1, 2, 3, 4, 5].forEach(function (num) {
   printStars(num);
 });
 //si queremos hacer una validacion o borrar por index no es posible en for of
 for(let key of names){
   console.log("nombres",key)
 }
 
 //for in {} => object
 // for of str []
 //forEach  []
 
 //for para todo lo que se pueda iterar
 
  
 //filter nos crea un arreglo friltrado 
 // map nos crea un arreglo
 // reduce para calculos 
 // some
 // findIndex