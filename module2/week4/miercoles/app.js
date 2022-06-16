//importar bcryptjs
const bcryptjs = require("bcryptjs");

//decirle cuantos caracteres random agregar
const saltRound = 12;

const plainText = "Salsa"
const plainText2 = "salsa"


//generar los valores randoms que se van a agregar
                    //genrar SAlt synchronus 
const salt = bcryptjs.genSaltSync(saltRound)

console.log("que es el salt",salt)
                        //hash || hashSync convierte el texto plano a un hash
const hash1 = bcryptjs.hashSync(plainText,salt)
const hash2 = bcryptjs.hashSync(plainText2,salt)
//compara un texto vs el hash  responde con un boolean false | true
const verifyPassword1 = bcryptjs.compareSync(plainText,hash1)
const verifyPassword2 = bcryptjs.compareSync("Gucamole",hash2)


console.log("hash 1:",hash1)
console.log("hash 2:",hash2)
console.log("-------------------")
console.log("La palabra es correcta1:",verifyPassword1)
console.log("la palabra es correcta2:",verifyPassword2)
