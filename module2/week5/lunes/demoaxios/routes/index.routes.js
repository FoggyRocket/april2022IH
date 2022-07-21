const router = require("express").Router();
//importamos axios
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {

  //axios.get(url).then().catch()

  axios.get("https://rickandmortyapi.com/api/character")
  .then(responseAxios=>{ 
      console.log("la respuesta del axios",responseAxios.data.results)
    res.render("index",{ characters: responseAxios.data.results })
  })
  .catch(error=>{
    next(error)
  })


});

/* GET home page */
router.get("/perros", (req, res, next) => {
  res.render("perros");
});

//post demo 
router.post("/api/demoPost",(req,res,next)=>{
  const {name,phone,role}= req.body

  res.status(200).json({ 
    id:"34567gb1267g612",
    msg:"Todo chido",
    name,
    phone,
    role
  })
})

module.exports = router;
