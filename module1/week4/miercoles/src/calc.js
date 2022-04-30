function sum(algo){
        //(!true) ==> false
    // if(!algo.length){
    //     return 0
    // }
    return algo.reduce((acc,cv)=>acc += cv ,0)

}


//tengo que meter un export con una validacion 
if(typeof module !== undefined){

    module.exports = sum 
}