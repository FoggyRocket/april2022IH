//importar express
const express = require("express")
//es de la parte de partials
const hbs = require("hbs")

//setup de express
const app = express()
app.use(express.static("public")) //<- es para utilizar los archivos estaticos dentro de public
//Vamos a reaizar el setup de hbs
// ../views/perritos/beagles evitaremos realizar este tipo de ruta
app.set("views",__dirname + "/views" )
app.set("view engine","hbs")
//configurar the partials
hbs.registerPartials(__dirname + "/views/partials")


/**
 * Vamos a recordar
 *  .write o send() //para express ====> enviar string 
 *  .sendFile(__dirname ) para acceder al html o mandar mandar archivos
 *   **.render()**  este nos facilitara el uso de los templates de .hbs 
 * 
 */
app.get("/",(req,res,next)=>{

    const student = {
        name: "Dylan",
        age: 29,
        pets:[
            {
                name:"nova",
                age:2
            },
            {
                name:"howl",
                age:"3 meses"
            }
        ]
    }


 //res.render("archivo",{... })  
                //{ student }
                /**
                 * {
                 *  student:{name:"",age:29,...keys}
                 * }
                 */
 //res.render("home",student)               
 res.render("home",student)
})


app.get("/otro",(req,res,next)=>{
    const artur = {
        name:"Artur",
        age:29,
        pets:[
            {
                name:"Silvestre",
                age:8
            }
        ],
        cat:true,
        work:"anda chambeando!!"
    }
    res.render("home",artur)
})

app.get("/players",(req,res,next)=>{

    const players = [
        {
            'name': 'Rusell',
            'lastName': 'Westbrook',
            'team': 'OKC',
            'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
        },
        {
            'name': 'Kevin',
            'lastName': 'Durant',
            'team': 'GSW',
            'photo': 'https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
        },
        {
            'name': 'Lebron',
            'lastName': 'James',
            'team': 'CLE',
            'photo': 'https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1'
        },
        {
            'name': 'Emanuel',
            'lastName': 'Ginóbilli',
            'team': 'SAS',
            'photo': 'https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg'
        },
        {
            'name': 'Kyrie',
            'lastName': 'Irving',
            'team': 'BOS',
            'photo': 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf'
        },
        {
            'name': 'Kobe',
            'lastName': 'Bryant',
            'team': 'LAK',
            'photo': 'https://clutchpoints.com/wp-content/uploads/2017/10/Kobe-Bryant-e1508564618882.jpg'
        },
    ];  
                    //{players:players}
                    //{ players: [... ]}
    res.render("playes", { players } )
})

app.get("/player",(req,res,next)=>{

    const player = {
        'name': 'Rusell',
        'lastName': 'Westbrook',
        'team': 'OKC',
        'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg'
    }
    res.render("onePlayer", {player})
})
//ultima
app.listen(3000,()=>{
    console.log("Estoy corriendo! :D")
})