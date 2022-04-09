function sum(a, b) {
  if(a === undefined && b === undefined){
    return 0
  } else if(a === undefined || b === undefined ){
    return a || b ; //si "a" tiene valor muestralo si no muestra b
    
  }
  return a + b
}

function subtract(a, b) {
  //console.log("que rayos", a,b)
  //if(condicion "true") { true}else{false}
  //a = 26 false
  //b= undefined true
  if(a === undefined && b === undefined){
    return 0
  }else if(a === undefined){
    return b
  }else if(b === undefined){
    return a
  }
  /*else if(a === undefined || b === undefined ){
    return a || b ; //si "a" tiene valor muestralo si no muestra b
    a  || 
    b
  }*/
  return a - b; 
}

function divide(a, b) {

  if(b === 0 ){
    throw "Error"
  }
                  //1.1324134234
  // let newResult = (a/b).toFixed(2) //String
  //result Number(newResult)
  return a / b 

}

function multiply(a, b) {
  return  a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
