


//vamos a invocar(llamar o instancear) las clases Background y de Mario
const mario = new Mario(marioImg,300,750,100,100)
const bg = new Background()









//function motorDeJuego se va actualizar y actualizar 

function update(){
    frames++;//estoy aumentando mis frames en 1
    ctx.clearRect(0,0,canvas.width,canvas.height)

    bg.draw()
    mario.draw()

    requestAnimationFrame( update )
}


update()