import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import {useNavigate, useLocation, useParams} from 'react-router-dom'
function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    //const params = useParams();

    console.log("location",location)
//     created: "2017-11-04T22:28:13.756Z"
// episode: ['https://rickandmortyapi.com/api/episode/10']
// gender: "Male"
// id: 19
// image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
// location: {name: 'unknown', url: ''}
// name: "Antenna Rick"
// origin: {name: 'unknown', url: ''}
// species: "Human"
// status: "unknown"
// type: "Human with antennae"
// url: "https://rickandmortyapi.com/api/character/19"
    const {image,gender,type,name,...rest  } = location.state.character
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Card image" src={image} />
      <CardBody>
        <CardTitle tag="h5">{rest.species}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
         {name}
        </CardSubtitle>
        <CardText>
          gender: {gender} {''}
          type: {type}
        </CardText>
        <Button
            onClick={()=>navigate("/")}
        >Button</Button>
      </CardBody>
    </Card>
  );
}
export default Profile