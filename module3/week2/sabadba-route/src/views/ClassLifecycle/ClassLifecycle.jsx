import { useEffect, useState } from "react";
import { Button, Form } from "reactstrap";
import { CustomFormGroup, CardCustom } from "../../components";
import axios from "axios";
//vamos a importar un hook de react router dom useNavigate
import {useNavigate} from 'react-router-dom';
function ClassLifecycle() {
  const [data, setData] = useState({});
  const [showCard, setShowCard] = useState(true);
  const [listCharacters, setListCharacters] = useState([]);
  const navigate = useNavigate() // nos va ayudar a navegar entre vistas!!
  useEffect(() => {
    //axios.get("url",)
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log("response", res.data);
        setListCharacters(res.data.results);
      })
      .catch((error) => {
        console.log("el Error:", error);
      });
  }, []);
  return (
    <div className="App">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("la data del form:", data);
        }}
      >
        <CustomFormGroup
          labelText="Mapy"
          inputCustomProps={{
            type: "date",
            name: "mapy_input",
            onChange: (e) =>
              setData((prevState) => ({ ...prevState, date: e.target.value })),
          }}
        />
        <CustomFormGroup
          labelText="Default"
          inputCustomProps={{
            type: "password",
            defaultValue: "Nova182$",
            onChange: (e) =>
              setData((prevState) => ({
                ...prevState,
                defaultValue: e.target.value,
              })),
          }}
        />
        <CustomFormGroup
          labelText="PlaceHolder"
          inputCustomProps={{
            type: "text",
            onChange: (e) =>
              setData((prevState) => ({
                ...prevState,
                textRandom: e.target.value,
              })),
            placeholder: "Agrega tu texto",
          }}
        />

        <Button>Enviar datos</Button>
      </Form>
      <Button onClick={() => setShowCard((preState) => !preState)}>
        Esconder Card
      </Button>
      {showCard && <CardCustom />}
      {/* Lista de cards de rick and morty
       */}
      {listCharacters.map((character, index_character) => (
        <CardCustom
          key={character.id}
          title={character.status}
          username={character.name}
          description={character.origin.name}
          handlePress={()=>navigate("/profile",{ state:{ character }  }) }
        />
      ))}
    </div>
  );
}

export default ClassLifecycle;
