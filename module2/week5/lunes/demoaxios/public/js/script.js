document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("demoaxios JS imported successfully!");
  },
  false
);

// // peticion basica!! axios
// //axios.get("https://rickandmortyapi.com/api/characters").then().catch()
// axios({
//   method:"get",
//   url:"https://rickandmortyapi.com/api/characters"
// })
// .then(res=>{
//   console.log("Respuesta correcta",res)
// })
// //400 --> error
// .catch(error=>console.log("error",error))


// //post
// /*
// axios({
//   method:'post',
//   url:"http://localhost:3000/api/demoPost",
//   params:{name:"Dylan",role:"ADMIN",phone:586814383}
// })*/

// axios.post("http://localhost:3000/api/demoPost",{name:"Dylan",role:"ADMIN",phone:586814383})//<----- 
// .then(res=>{
//   console.log("Respuesta en post:",res)
// })
// .catch(error=>console.log("error",error))