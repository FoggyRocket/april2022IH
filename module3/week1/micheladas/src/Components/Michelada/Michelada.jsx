import { SectionChelas } from "../styledCompos";

const Michelada = ({ chela, chilito, gomitas, clamato, limon, cuantas }) => {
  //jsx
  return (
    <SectionChelas>
      <span>Tus Chelas son: {cuantas}</span>
      <ul>
        <li>{chela}</li>
        <li>{chilito ? "si con chile" : "sin chile porfa"}</li>
        <li>{gomitas ? "si con gomitas" : " sin gomitas"}</li>
        <li>{clamato ? "si con clamato" : "sin clamato"}</li>
        <li>{limon ? "si con limon" : "sin limon"}</li>
      </ul>
      <br></br>
    </SectionChelas>
  );
};

export default Michelada;
