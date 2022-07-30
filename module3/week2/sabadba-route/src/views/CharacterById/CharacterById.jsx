import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import {useNavigate, useLocation, useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
function CharacterById() {
    const [character,setChatacter] = useState({})
    const navigate = useNavigate();
    //const location = useLocation();
    const params = useParams();
    console.log("location",params)
    const {id} = params

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res=>{
            console.log("que es?",res.data)
            setChatacter(res.data)
        })
        .catch(error=>console.log("error byid",error))

    },[])
    //navigate(`/character/${idRandom}`)
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Card image" src={character.image} />
      <CardBody>
        <CardTitle tag="h5">{character.species}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
         {character.name}
        </CardSubtitle>
        <CardText>
          gender: {character.gender} {''}
          type: {character.type}
        </CardText>
        <Button
            onClick={()=>navigate("/")}
        >Button</Button>
      </CardBody>
    </Card>
  );
}
export default CharacterById