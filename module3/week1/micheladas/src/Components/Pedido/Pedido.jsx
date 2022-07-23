import { PedidoSection } from "../styledCompos";

const Pedido = ({ name, order, price }) => {
  return (
    <PedidoSection>
      <h2>tu pedido es</h2>
      <span> A nombre de: {name}</span>
      <span>Con el Precio de {price}</span>
      <span>Por {order} micheladas</span>
    </PedidoSection>
  );
};

export default Pedido;
