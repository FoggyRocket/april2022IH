//Vamos a recordar!!!

function func3() {
  console.log("Que esta pasando!");
  return true;
}
function func1() {
  console.log("Hola!");
  return "Hola en return";
}

function func2() {
  console.log("Adios :D");
  return 20;
}

//llamar o ejecutar una funcion!

func1(); // ()<--- con estos ejecutamos una funcion
func2();
func3();

//console
// 1.- Hola
// 2.- Adios
// 3.- que esta pasando!

//Callbacks => cb()
// [function]
//func1( func2 ) //--- good
//true
//func2( func3() ) //---bad

function perro(cb) {
  console.log("que esto", typeof cb);
  cb();
}

perro(func1);
perro(function () {
  console.log("soy una anonima!!");
});

perro(() => {
  console.log("Soy un arrow function");
}); //<- la mas vista ES6

function gato(param) {
  if (param >= 10) {
    console.log("correcto");
  }

  /*if(param()>= 10){

    }*/
}

gato(func2());

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

//callbacks Hells

function getDirections(step, callback, errorCallback) {
  //setTimeout( ()=> {
  console.log(directions[step]); //<- step 0...3
  //-1  undefined
  if (!directions[step]) errorCallback("Instructions not found.");
  else callback();
  /**
   *   if(true)
   *      code
   *      code2
   *   else
   *      code
   *
   */
  //},2000); //end timeout
}

getDirections(
  0, //step
  () => {
    getDirections(1, () => {
        getDirections(2,()=>{
            getDirections(3,()=>{
                getDirections(4,()=>{

                },(error)=>console.log(error))
            })
        })
    });
  }, //callback
  (error) => console.log(error) // errorCallback
);


//Primise
/*new Promise(function (resolve, reject){
    if(true){
        resolve()
    }else{
        reject("command not found")
    }
})*/
console.log("////////////////")
function obtainDirection(step){
    return new Promise((resolve,reject)=>{
        console.log(directions[step])
        if(!directions[step]) reject("No encuentro esa ruta bro!")
        else resolve()
    })
}
//Promise in JS 
//then(cb)  -->
// catch(cb) -->


obtainDirection(0)
.then(()=> obtainDirection(1) )
.then(()=> obtainDirection(5) )
.then(()=> obtainDirection(31) )
.then(()=> console.log("You arrived at your direction"))
.catch((error)=> console.log(error))


//promise All
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("foo"), 1000);
  });
   
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1337), 2000);
  });
   
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve( { name: "Bob" } ), 4000);
  });

  const p4 = new Promise((resolve,reject)=>{
      setTimeout(()=>reject("Error bien feo"),4500)
  }) 
   

  Promise.all([p1,p2,p3,p4])
  .then(value=>{console.log("value?",value)})
  .catch(error=>console.log(error))

  //Ejecutar multiples promesas 