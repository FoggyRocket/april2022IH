

class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        //0,0 es el origen del canvas
        this.width = canvas.width;
        this.height = canvas.height;
        //const img = new Image()
        this.image = new Image();
        this.image.src = "https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png"
    }
    //methods
    draw(){
        this.x --; //esto puede ser tu velocidad!
        if(this.x < -canvas.width){
            this.x = 0
        }
                //(imagen,x,y,w,h)
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        // voy a colocar otra drawImages con otro valor
        ctx.drawImage(
            this.image,
            this.x + this.width,
            this.y,
            this.width,
            this.height
        )


    }//end draw

    gameOver(){
        ctx.font = "80px Arial"
        ctx.fillText("Te moriste!!! :(",150,150)
    }
}


class Character{
            //150,150,100,100
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        
    }
    draw(){
        return "Vamos a pintar"
    }
    //methods
    selectCharacter(){
        return "Selecciona algo!!"
    }
}

//herencia de terrenos!! 
        // extends ClasePadre
        // const mario = new Mario(["...","..."],150,150,100,100)
class Mario extends Character{
            //["...","..."],150,150,100,100
    constructor(arrImg,x,y,wid,h){
        super(x,y,wid,h)
        //imagenes // esta no es la forma pro, es la forma mas sencilla! de realizar una animacion!
        //this.imgMarioParado
        this.image1 = new Image();
        this.image1.src = arrImg[0] // "http//imagen.png"
        //this.imgMarioCorriendo
        this.image2 = new Image()
        this.image2.src = arrImg[1]

        this.imageOfficial = this.image1
    }

    draw(){
        if(frames % 10 === 0){
            //if ternario "?"(if) ":"(else)   // true ? CasoVerdaro : CasoFalso;

            this.imageOfficial = this.imageOfficial === this.image1 ? this.image2 : this.image1
            /**
             * if(this.imageOfficial === this.image1 ){
             *  this.imageOfficial = this.image2
             * }else{
             *  this.imageOfficial = this.image1
             * }
             */
        }
        ctx.drawImage(this.imageOfficial,this.x,this.y,this.width,this.height)
    }
}
