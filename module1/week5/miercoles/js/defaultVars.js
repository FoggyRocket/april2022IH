//necesito mi canvas!!
const canvas = document.getElementById("myCanvas"); //<canvas/>
//quiero el context
const ctx = canvas.getContext("2d")

/**
 * Todas las variables globales que necesite para el proyecto
 * este documento se va a declar al arriba de todos
 *  frames, requesId, arrayImages, gravedad, valoresPorDefectoDeMiPersonaje
 */

const marioImg = ["https://bit.ly/2L7yH3f","https://art.pixilart.com/33b1bbc23398be7.png"]

let frames = 0;// 1 , 2, 3,4
let requestId; // es para terminar el juego
const armyEnemy = [];



