


//vamos a invocar(llamar o instancear) las clases Background y de Mario
const mario = new Mario(marioImg,300,750,100,100)
const bg = new Background()

//const enemy = new Enemy(100,100)







//function motorDeJuego se va actualizar y actualizar 

function update(){
    frames++;//estoy aumentando mis frames en 1
    ctx.clearRect(0,0,canvas.width,canvas.height)

    bg.draw()
    mario.draw()
    generateEnemies()//primero generamos
    drawEnemies()//pintamos
    // enemy.draw()
    // if( mario.collision(enemy) ){
    //     console.log("me esta tocando!!!")
    //     requestId = undefined
    //     bg.gameOver()
    // }
    //terminar el juego
    if(requestId){
        requestAnimationFrame( update )
    }
    
}



//una funcion para iniciar el juego
function startGame(){
    requestId =     requestAnimationFrame( update )

}

//dos funciones muy importantes!!! GerenarEnemigos pintarEnemigos

function generateEnemies(){
        //voy a validar con los frames para que no se llene mi arreglo desde el inicio 

        if(frames %170 ===0 || frames %60 === 0){
            let y = Math.floor(Math.random() * (750 - 10) )+ 10
            const enemy = new Enemy(100,100,y)

            armyEnemy.push(enemy)
        }
}

function drawEnemies(){

    armyEnemy.forEach((enemy,index_enemy)=>{
        enemy.draw()

if( mario.collision(enemy) ){
        console.log("me esta tocando!!!")
        requestId = undefined
        bg.gameOver()
    }
    //terminar 
    })

}



startGame()


addEventListener("keydown",(event)=>{
    //izq
    if(event.keyCode === 65 ){
        mario.x -= 20;
    }

    //dere
    if(event.keyCode === 68){
        mario.x += 20;
    }

    //salto
    if(event.keyCode === 32){
        mario.y -= 60;
    }
})