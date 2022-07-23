import { useState } from "react";
//contenedores
import { Pedido, Chelas } from "./Components";
//utilerias ui-kit atomo
import { Button } from "./Components/styledCompos";
import "./App.css";

function App() {
  //hooks react
  //la primera variable es de consulta y se actualiza en base a la segunda
  // la segunda variable accion modifica la primera
  // drilling position
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [pedido, setPedido] = useState({
    name: "",
    order: 0,
    price: 0,
  });

  const precioBase = 60;
  const handleMiches = (event) => {
    event.preventDefault();
    setCount(1 + count);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handlePedido = (event) => {
    event.preventDefault();
    let price = precioBase * count;
    setPedido({ name, order: count, price });
  };

  return (
    <div className="App">
      <h1>Hola amigos desde app</h1>
      <form>
        <input type="text" onChange={handleChange} />
        <Button onClick={handleMiches} primary>
          pedir micheladas
        </Button>
        <Button onClick={handlePedido}>hacer pedido</Button>
      </form>
      <span>Ya pedimios: {count} micheladas</span>
      <Chelas
        cuantas={count}
        chela={"maligna"}
        chilito={true}
        gomitas={false}
        clamato={true}
        limon={false}
      />
      <Pedido {...pedido} />
    </div>
  );
}

export default App;
