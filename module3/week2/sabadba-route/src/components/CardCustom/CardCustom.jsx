import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
} from "reactstrap";

function CardCustom({
  title = "Titulo Card",
  username = "Username",
  description = "Aqui va una descripcion",
  handlePress = () => {},
  github = "https://www.github.com",
}) {

//useEffect(cb, arrayEmpty )

//mounting
//useEffect(()=>{},[] )

//updating + (mouinting)
/*useEffect(()=>{
    console.log("la veciena dice:",var)
},[var])*/

//unmounting + (mounting)
/*useEffect(()=>{
    return ()=>{
        console.log("ME voy a morir u.u")
    }
},[]) */

/**
    useEffect(()=>{
        backend.get("/listas-User")
    }) 
*/
   // const [isLoading,setIsLoading]= useState(false)
    //mouting
    // useEffect(()=>{
    //     console.log("ME acabao de crear")
    // }, [])
    //mounting ya viene por defecto
    // useEffect(()=>{
    //     if(isLoading){
    //         console.log("Me creo y aparte soy de tipo vecin@")
    //     }
    // },[isLoading])

    useEffect(()=>{
        //1 mouting
        console.log("Este es el mounting paso 1")
        //2 unmounting
        return()=>{
            console.log("Me voe a morir u.u bye!")
        }
    },[])

  return (
    <Card
      className="my-2"
      style={{
        width: "18rem",
      }}
    >
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">{username}</CardTitle>
        <CardText>{description}</CardText>
        <Button onClick={handlePress}>Go somewhere</Button>
      </CardBody>
      <CardFooter>
        <a href={github}>
          <Button color="primary" outline>
            Github
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default CardCustom;
